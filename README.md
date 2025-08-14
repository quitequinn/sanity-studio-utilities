# Sanity Studio Utilities

A comprehensive collection of administrative utilities for Sanity Studio that streamlines content management, bulk operations, and data optimization tasks.

## Features

- **🔍 Search & Delete**: Bulk content management and cleanup operations
- **🗑️ Asset Cleanup**: Remove unused assets and optimize storage
- **📊 Data Operations**: Bulk search, add, and modify content across document types
- **📁 Font Data Processing**: Extract and process font metadata
- **📤 Data Export**: Export content for backup and migration
- **🔗 Reference Optimization**: Convert to weak references for better performance
- **🌐 URL Management**: Convert IDs to slugs for SEO optimization
- **📋 Content Duplication**: Duplicate and rename content efficiently

## Installation

```bash
npm install sanity-studio-utilities
```

## Quick Start

### Add to Sanity Studio

```javascript
// sanity.config.js
import { Utilities } from 'sanity-studio-utilities'

export default defineConfig({
  // ... other config
  tools: [
    Utilities()
  ]
})
```

## Utilities Included

### 1. Search and Delete
**Purpose**: Bulk content management and cleanup

- Search across multiple document types
- Preview results before deletion
- Batch delete operations
- Safety confirmations
- Progress tracking

```javascript
import { SearchAndDelete } from 'sanity-studio-utilities'

// Usage in custom component
<SearchAndDelete client={sanityClient} />
```

### 2. Delete Unused Assets
**Purpose**: Asset optimization and storage cleanup

- Scan for unreferenced assets
- Preview unused files
- Bulk asset deletion
- Storage usage reports
- Safe deletion with confirmations

```javascript
import { DeleteUnusedAssets } from 'sanity-studio-utilities'

<DeleteUnusedAssets client={sanityClient} />
```

### 3. Search Add Data
**Purpose**: Bulk data operations across content types

- Search and modify existing content
- Add data to multiple documents
- Field-specific operations
- Batch processing
- Undo capabilities

```javascript
import { SearchAddData } from 'sanity-studio-utilities'

<SearchAddData client={sanityClient} />
```

### 4. Get Font Data
**Purpose**: Font metadata extraction and processing

- Extract font metrics
- Character set analysis
- Glyph counting
- Variable font detection
- Batch font processing

```javascript
import { GetFontData } from 'sanity-studio-utilities'

<GetFontData client={sanityClient} />
```

### 5. Export Data
**Purpose**: Data export and backup functionality

- Export documents by type
- JSON/CSV format support
- Filtered exports
- Relationship preservation
- Backup scheduling

```javascript
import { ExportData } from 'sanity-studio-utilities'

<ExportData client={sanityClient} />
```

### 6. Convert to Weak References
**Purpose**: Reference system optimization

- Convert strong to weak references
- Improve query performance
- Reduce circular dependencies
- Batch conversion
- Rollback capabilities

```javascript
import { ConvertToWeakReferences } from 'sanity-studio-utilities'

<ConvertToWeakReferences client={sanityClient} />
```

### 7. Convert IDs to Slug
**Purpose**: URL structure optimization

- Generate SEO-friendly slugs
- Batch ID conversion
- Custom slug patterns
- Duplicate handling
- URL validation

```javascript
import { ConvertIdsToSlug } from 'sanity-studio-utilities'

<ConvertIdsToSlug client={sanityClient} />
```

### 8. Duplicate and Rename
**Purpose**: Content duplication workflows

- Duplicate documents with modifications
- Batch renaming operations
- Relationship preservation
- Custom naming patterns
- Validation and conflict resolution

```javascript
import { DuplicateAndRename } from 'sanity-studio-utilities'

<DuplicateAndRename client={sanityClient} />
```

## Usage Examples

### Complete Utilities Dashboard

```javascript
import React from 'react'
import { Container, Card } from '@sanity/ui'
import {
  SearchAndDelete,
  DeleteUnusedAssets,
  SearchAddData,
  GetFontData,
  ExportData,
  ConvertToWeakReferences,
  ConvertIdsToSlug,
  DuplicateAndRename
} from 'sanity-studio-utilities'
import { useSanityClient } from './hooks/useSanityClient'

export const UtilitiesDashboard = () => {
  const client = useSanityClient()

  return (
    <Container style={{ paddingBottom: '5rem' }}>
      <Card padding={4}>
        <ExportData client={client} />
        <GetFontData client={client} />
        <SearchAddData client={client} />
        <SearchAndDelete client={client} />
        <DeleteUnusedAssets client={client} />
        <ConvertToWeakReferences client={client} />
        <ConvertIdsToSlug client={client} />
        <DuplicateAndRename client={client} />
      </Card>
    </Container>
  )
}
```

### Individual Utility Usage

```javascript
import { SearchAndDelete } from 'sanity-studio-utilities'

const MyCustomTool = () => {
  const client = useSanityClient()
  
  return (
    <div>
      <h2>Content Cleanup</h2>
      <SearchAndDelete 
        client={client}
        documentTypes={['post', 'page']}
        onComplete={(results) => {
          console.log('Cleanup completed:', results)
        }}
      />
    </div>
  )
}
```

## Configuration

### Custom Hooks Setup

```javascript
// hooks/useSanityClient.js
import { useClient } from 'sanity'

export const useSanityClient = () => {
  return useClient({ apiVersion: '2023-01-01' })
}
```

### Environment Variables

```bash
# Sanity project configuration
SANITY_STUDIO_PROJECT_ID=your-project-id
SANITY_STUDIO_DATASET=production

# Optional: Utility-specific settings
SANITY_STUDIO_BATCH_SIZE=100
SANITY_STUDIO_MAX_EXPORTS=1000
```

## Safety Features

### Confirmation Dialogs
- All destructive operations require confirmation
- Preview changes before applying
- Batch operation summaries
- Undo capabilities where possible

### Progress Tracking
- Real-time progress indicators
- Detailed operation logs
- Error reporting and handling
- Cancellation support

### Data Validation
- Input validation for all operations
- Relationship integrity checks
- Duplicate detection
- Conflict resolution

## API Reference

### Common Props

All utility components accept these common props:

- `client`: Sanity client instance (required)
- `onComplete`: Callback function for operation completion
- `onError`: Error handling callback
- `batchSize`: Number of items to process per batch
- `dryRun`: Preview mode without making changes

### Utility-Specific Props

#### SearchAndDelete
- `documentTypes`: Array of document types to search
- `filters`: Additional GROQ filters
- `confirmationRequired`: Require confirmation for each deletion

#### DeleteUnusedAssets
- `assetTypes`: Types of assets to check (image, file)
- `olderThan`: Only delete assets older than specified date
- `excludePatterns`: Patterns to exclude from deletion

#### ExportData
- `format`: Export format ('json', 'csv')
- `includeReferences`: Include referenced documents
- `maxDepth`: Maximum reference depth to follow

## Requirements

- Sanity Studio v3+
- React 18+
- Sanity UI v1+
- Node.js 16+

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Considerations

- Batch processing for large datasets
- Progress indicators for long operations
- Memory-efficient streaming for exports
- Cancellable operations
- Rate limiting for API calls

## Security

- All operations respect Sanity permissions
- Audit logging for destructive operations
- Safe defaults for all utilities
- Confirmation requirements for dangerous operations

## Contributing

Contributions welcome! Please read our contributing guidelines and submit pull requests for improvements.

## License

MIT License - see LICENSE file for details.

## Support

For issues and questions:
- Create an issue on GitHub
- Check existing issues for solutions
- Review the documentation

## Changelog

### v1.0.0
- Initial release
- 8 core utilities
- Batch processing support
- Safety features
- Progress tracking
- Export functionality
- Reference optimization
- Asset cleanup tools