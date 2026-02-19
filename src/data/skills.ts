export interface Skill {
  name: string;
  category: 'product' | 'engineering' | 'tools';
}

export const skills: Skill[] = [
  // Product
  { name: 'Product Strategy', category: 'product' },
  { name: 'Roadmapping', category: 'product' },
  { name: 'User Research', category: 'product' },
  { name: 'Agile / Scrum', category: 'product' },
  { name: 'A/B Testing', category: 'product' },
  { name: 'Go-to-Market', category: 'product' },
  // Engineering
  { name: 'Python', category: 'engineering' },
  { name: 'TypeScript', category: 'engineering' },
  { name: 'React', category: 'engineering' },
  { name: 'SQL', category: 'engineering' },
  { name: 'System Design', category: 'engineering' },
  // Tools
  { name: 'Figma', category: 'tools' },
  { name: 'JIRA', category: 'tools' },
  { name: 'Amplitude', category: 'tools' },
  { name: 'Mixpanel', category: 'tools' },
  { name: 'AWS', category: 'tools' },
];

export const categoryColors: Record<Skill['category'], string> = {
  product: '#3b82f6',
  engineering: '#10b981',
  tools: '#f59e0b',
};

export const categoryLabels: Record<Skill['category'], string> = {
  product: 'Product',
  engineering: 'Engineering',
  tools: 'Tools',
};
