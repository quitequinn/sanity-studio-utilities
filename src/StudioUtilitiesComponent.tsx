import React, { useState } from 'react';
import { Box, Card, Text, Button, Flex, Stack, Grid } from '@sanity/ui';
import { useClient } from 'sanity';

interface StudioUtilitiesProps {
	onClose?: () => void;
}

interface UtilityTool {
	id: string;
	name: string;
	description: string;
	icon: string;
	category: 'data' | 'assets' | 'content' | 'optimization';
	status: 'available' | 'coming-soon' | 'deprecated';
}

const StudioUtilitiesComponent: React.FC<StudioUtilitiesProps> = ({ onClose }) => {
	const client = useClient();
	const [selectedCategory, setSelectedCategory] = useState<string>('all');

	const utilities: UtilityTool[] = [
		{
			id: 'search-and-delete',
			name: 'Search & Delete',
			description: 'Find and remove documents with advanced search capabilities',
			icon: '🔍',
			category: 'content',
			status: 'available',
		},
		{
			id: 'bulk-data-operations',
			name: 'Bulk Data Operations',
			description: 'Perform batch operations on multiple documents at once',
			icon: '📊',
			category: 'data',
			status: 'available',
		},
		{
			id: 'delete-unused-assets',
			name: 'Delete Unused Assets',
			description: 'Clean up unreferenced assets to free up storage space',
			icon: '🗑️',
			category: 'assets',
			status: 'available',
		},
		{
			id: 'export-data',
			name: 'Export Data',
			description: 'Export your Sanity data in various formats',
			icon: '📤',
			category: 'data',
			status: 'available',
		},
		{
			id: 'convert-references',
			name: 'Convert References',
			description: 'Convert strong references to weak references',
			icon: '🔗',
			category: 'optimization',
			status: 'available',
		},
		{
			id: 'convert-ids-to-slugs',
			name: 'Convert IDs to Slugs',
			description: 'Transform document IDs into SEO-friendly slugs',
			icon: '🌐',
			category: 'optimization',
			status: 'available',
		},
		{
			id: 'duplicate-and-rename',
			name: 'Duplicate & Rename',
			description: 'Duplicate documents and rename them efficiently',
			icon: '📋',
			category: 'content',
			status: 'available',
		},
		{
			id: 'font-data-extractor',
			name: 'Font Data Extractor',
			description: 'Extract metadata and information from font files',
			icon: '📁',
			category: 'assets',
			status: 'available',
		},
		{
			id: 'advanced-reference-array',
			name: 'Advanced Reference Array',
			description: 'Enhanced reference array input with advanced features',
			icon: '🔗',
			category: 'content',
			status: 'available',
		},
		{
			id: 'font-management-suite',
			name: 'Font Management Suite',
			description: 'Upload and manage font files with metadata extraction',
			icon: '🎨',
			category: 'assets',
			status: 'available',
		},
		{
			id: 'enhanced-commerce',
			name: 'Enhanced Commerce',
			description: 'Advanced e-commerce schemas with renewal support',
			icon: '🛒',
			category: 'content',
			status: 'available',
		},
		{
			id: 'renewals-authorization',
			name: 'Renewals Authorization',
			description: 'Manage renewal orders and cart processing',
			icon: '🔄',
			category: 'content',
			status: 'available',
		},
	];

	const categories = [
		{ id: 'all', name: 'All Utilities', icon: '🛠️' },
		{ id: 'data', name: 'Data Operations', icon: '📊' },
		{ id: 'assets', name: 'Asset Management', icon: '🗂️' },
		{ id: 'content', name: 'Content Tools', icon: '📝' },
		{ id: 'optimization', name: 'Optimization', icon: '⚡' },
	];

	const filteredUtilities = selectedCategory === 'all' 
		? utilities 
		: utilities.filter(u => u.category === selectedCategory);

	const handleUtilityClick = (utilityId: string) => {
		// In a real implementation, this would route to the specific utility
		const utilityPath = `/desk/${utilityId}`;
		window.open(utilityPath, '_blank');
	};

	const getCategoryStats = () => {
		return categories.slice(1).map(category => ({
			...category,
			count: utilities.filter(u => u.category === category.id).length,
		}));
	};

	const getStatusColor = (status: string) => {
		switch (status) {
			case 'available': return 'positive';
			case 'coming-soon': return 'caution';
			case 'deprecated': return 'critical';
			default: return 'default';
		}
	};

	return (
		<Box padding={4}>
			<Flex justify="space-between" align="center" marginBottom={4}>
				<Text size={3} weight="bold">Studio Utilities Dashboard</Text>
				{onClose && (
					<Button mode="ghost" text="Close" onClick={onClose} />
				)}
			</Flex>

			{/* Overview Stats */}
			<Card padding={4} radius={2} shadow={1} marginBottom={4}>
				<Text size={2} weight="semibold" marginBottom={3}>Utility Categories</Text>
				<Grid columns={[2, 3, 4]} gap={3}>
					{getCategoryStats().map((category) => (
						<Card key={category.id} padding={3} radius={2} tone="transparent">
							<Flex align="center" gap={2}>
								<Text size={2}>{category.icon}</Text>
								<Box>
									<Text size={1} weight="semibold">{category.name}</Text>
									<Text size={1} muted>{category.count} tools</Text>
								</Box>
							</Flex>
						</Card>
					))}
				</Grid>
			</Card>

			{/* Category Filter */}
			<Card padding={4} radius={2} shadow={1} marginBottom={4}>
				<Text size={2} weight="semibold" marginBottom={3}>Filter by Category</Text>
				<Flex gap={2} wrap="wrap">
					{categories.map((category) => (
						<Button
							key={category.id}
							text={`${category.icon} ${category.name}`}
							mode={selectedCategory === category.id ? 'default' : 'ghost'}
							tone={selectedCategory === category.id ? 'primary' : 'default'}
							size={1}
							onClick={() => setSelectedCategory(category.id)}
						/>
					))}
				</Flex>
			</Card>

			{/* Utilities Grid */}
			<Card padding={4} radius={2} shadow={1}>
				<Text size={2} weight="semibold" marginBottom={3}>
					{selectedCategory === 'all' ? 'All Utilities' : categories.find(c => c.id === selectedCategory)?.name} 
					<Text size={1} muted> ({filteredUtilities.length} tools)</Text>
				</Text>
				
				<Grid columns={[1, 2, 3]} gap={4}>
					{filteredUtilities.map((utility) => (
						<Card
							key={utility.id}
							padding={4}
							radius={2}
							shadow={1}
							tone="default"
							style={{ cursor: 'pointer' }}
							onClick={() => handleUtilityClick(utility.id)}
						>
							<Stack space={3}>
								<Flex justify="space-between" align="flex-start">
									<Text size={3}>{utility.icon}</Text>
									<Badge 
										tone={getStatusColor(utility.status)} 
										mode="outline" 
										fontSize={0}
									>
										{utility.status.replace('-', ' ')}
									</Badge>
								</Flex>
								
								<Box>
									<Text size={2} weight="semibold" marginBottom={2}>
										{utility.name}
									</Text>
									<Text size={1} muted>
										{utility.description}
									</Text>
								</Box>

								<Button
									text="Open Tool"
									tone="primary"
									size={1}
									onClick={(e) => {
										e.stopPropagation();
										handleUtilityClick(utility.id);
									}}
									disabled={utility.status !== 'available'}
								/>
							</Stack>
						</Card>
					))}
				</Grid>

				{filteredUtilities.length === 0 && (
					<Box padding={4} style={{ textAlign: 'center' }}>
						<Text size={1} muted>No utilities found in this category.</Text>
					</Box>
				)}
			</Card>

			{/* Quick Actions */}
			<Card padding={4} radius={2} shadow={1} marginTop={4}>
				<Text size={2} weight="semibold" marginBottom={3}>Quick Actions</Text>
				<Flex gap={2} wrap="wrap">
					<Button
						text="🔍 Search & Delete"
						tone="primary"
						onClick={() => handleUtilityClick('search-and-delete')}
					/>
					<Button
						text="📊 Bulk Operations"
						tone="default"
						onClick={() => handleUtilityClick('bulk-data-operations')}
					/>
					<Button
						text="🗑️ Clean Assets"
						tone="default"
						onClick={() => handleUtilityClick('delete-unused-assets')}
					/>
					<Button
						text="📤 Export Data"
						tone="default"
						onClick={() => handleUtilityClick('export-data')}
					/>
					<Button
						text="🔄 Renewals"
						tone="default"
						onClick={() => handleUtilityClick('renewals-authorization')}
					/>
					<Button
						text="🛒 Commerce"
						tone="default"
						onClick={() => handleUtilityClick('enhanced-commerce')}
					/>
				</Flex>
			</Card>

			{/* Help & Documentation */}
			<Card padding={4} radius={2} shadow={1} marginTop={4}>
				<Text size={2} weight="semibold" marginBottom={3}>Help & Documentation</Text>
				<Stack space={2}>
					<Text size={1} muted>
						The Studio Utilities collection provides powerful tools for managing your Sanity content.
						Each utility is designed to handle specific administrative tasks efficiently and safely.
					</Text>
					<Flex gap={2}>
						<Button
							text="📖 Documentation"
							mode="ghost"
							onClick={() => alert('Documentation would open here')}
						/>
						<Button
							text="💡 Get Support"
							mode="ghost"
							onClick={() => alert('Support channel would open here')}
						/>
						<Button
							text="🐛 Report Issue"
							mode="ghost"
							onClick={() => alert('Issue reporting would open here')}
						/>
					</Flex>
				</Stack>
			</Card>
		</Box>
	);
};

// Badge component (simple implementation since it might not be in @sanity/ui)
const Badge: React.FC<{
	children: React.ReactNode;
	tone: string;
	mode: string;
	fontSize: number;
}> = ({ children, tone, mode, fontSize }) => (
	<span
		style={{
			display: 'inline-block',
			padding: '2px 8px',
			borderRadius: '4px',
			fontSize: '12px',
			fontWeight: '500',
			backgroundColor: tone === 'positive' ? '#e6f7e6' : 
							 tone === 'caution' ? '#fff3cd' :
							 tone === 'critical' ? '#f8d7da' : '#f8f9fa',
			color: tone === 'positive' ? '#155724' :
				   tone === 'caution' ? '#856404' :
				   tone === 'critical' ? '#721c24' : '#495057',
			border: mode === 'outline' ? '1px solid currentColor' : 'none',
		}}
	>
		{children}
	</span>
);

export default StudioUtilitiesComponent;
