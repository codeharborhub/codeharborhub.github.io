import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useHomePageRoute } from '@docusaurus/theme-common/internal';
import {
  useSidebarBreadcrumbs,
  useDoc,
} from '@docusaurus/plugin-content-docs/client';

import HomeBreadcrumbItem from '@theme/DocBreadcrumbs/Items/Home';
import BookmarkButton from "@site/src/components/learning/BookmarkButton";
import styles from './styles.module.css';

interface BreadcrumbsItemLinkProps {
  children: ReactNode;
  href?: string;
  isLast: boolean;
}

/**
 * BreadcrumbsItemLink Component
 * Renders a breadcrumb link or a non-clickable span for the last item in the trail.
 */
function BreadcrumbsItemLink({
  children,
  href,
  isLast,
}: BreadcrumbsItemLinkProps): ReactNode {
  const className = clsx('breadcrumbs__link', {
    [styles.activeItem]: isLast,
    [styles.breadcrumbLink]: !isLast,
  });

  if (isLast) {
    return (
      <span className={className} aria-current="page">
        {children}
      </span>
    );
  }

  return href ? (
    <Link className={className} href={href}>
      <span>{children}</span>
    </Link>
  ) : (
    <span className={className}>{children}</span>
  );
}

interface BreadcrumbsItemProps {
  children: ReactNode;
  active?: boolean;
}

/**
 * Wrapper for individual breadcrumb `<li>` items.
 */
function BreadcrumbsItem({ children, active }: BreadcrumbsItemProps): ReactNode {
  return (
    <li
      className={clsx('breadcrumbs__item', styles.breadcrumbItem, {
        'breadcrumbs__item--active': active,
      })}
    >
      {children}
    </li>
  );
}

/**
 * Safely extract doc metadata without throwing outside of <DocProvider>
 */
function useSafeDocMetadata() {
  try {
    const { metadata } = useDoc();
    return metadata;
  } catch {
    return null;
  }
}

/**
 * Enhanced DocBreadcrumbs Component for CodeHarborHub
 */
export default function DocBreadcrumbs(): ReactNode {
  const breadcrumbs = useSidebarBreadcrumbs();
  const homePageRoute = useHomePageRoute();
  const docMetadata = useSafeDocMetadata();

  // If there are no breadcrumbs to display, omit component
  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null;
  }

  const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1];

  // 1. DYNAMIC COMPONENT STATE KEYS: Fixes multi-page global click tracking bug
  const bookmarkId = docMetadata?.unversionedId || docMetadata?.id || lastBreadcrumb?.href || lastBreadcrumb?.label || 'unknown-page';
  const bookmarkTitle = docMetadata?.title ?? lastBreadcrumb?.label ?? 'Documentation';
  const bookmarkUrl = docMetadata?.permalink ?? lastBreadcrumb?.href ?? '';
  const bookmarkDescription = docMetadata?.description ?? '';

  const ariaLabel = translate({
    id: 'theme.docs.breadcrumbs.navAriaLabel',
    message: 'Breadcrumbs',
    description: 'The ARIA label for the breadcrumbs',
  });

  return (
    <nav
      className={clsx(
        ThemeClassNames.docs.docBreadcrumbs,
        styles.breadcrumbContainer
      )}
      aria-label={ariaLabel}
    >
      {/* Center/Main: Breadcrumbs Trail */}
      <div className={styles.breadcrumbsWrapper}>
        <ol className={clsx('breadcrumbs', styles.breadcrumbsList)}>
          {homePageRoute && <HomeBreadcrumbItem />}

          {breadcrumbs.map((item, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            const href =
              item.type === 'category' && item.linkUnlisted
                ? undefined
                : item.href;

            return (
              <BreadcrumbsItem key={item.href ?? idx} active={isLast}>
                <BreadcrumbsItemLink href={href} isLast={isLast}>
                  {item.label}
                </BreadcrumbsItemLink>
              </BreadcrumbsItem>
            );
          })}
        </ol>
      </div>

      {/* Right Action: Bookmark Button with uniquely separated ID context mapping */}
      <div className={clsx(styles.actionGroup, styles.rightAction)}>
        <BookmarkButton
          id={bookmarkId}
          title={bookmarkTitle}
          url={bookmarkUrl}
          type="tutorial"
          description={bookmarkDescription}
        />
      </div>
    </nav>
  );
}
