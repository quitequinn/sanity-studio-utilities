// Sanity Studio Utilities - Comprehensive collection of administrative utilities
// Streamlines content management, bulk operations, and data optimization

export { default as StudioUtilitiesComponent } from './StudioUtilitiesComponent';

// Main tool export for Sanity Studio
export const StudioUtilities = () => ({
	name: 'utilities',
	title: 'Studio Utilities',
	icon: () => '🛠️',
	component: StudioUtilitiesComponent,
});

// Named export alias
export const Utilities = StudioUtilities;

// Re-export individual utilities for direct use
export * from '../../../sanity-search-and-delete/src';
export * from '../../../sanity-delete-unused-assets/src';
export * from '../../../sanity-bulk-data-operations/src';
export * from '../../../sanity-font-data-extractor/src';
export * from '../../../sanity-export-data/src';
export * from '../../../sanity-convert-references/src';
export * from '../../../sanity-convert-ids-to-slugs/src';
export * from '../../../sanity-duplicate-and-rename/src';
