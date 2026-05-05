const fs = require('fs');

let content = fs.readFileSync('components/ProjectsSection.tsx', 'utf8');

// Remove PROJECTS_PER_PAGE
content = content.replace(/const PROJECTS_PER_PAGE = 6;\s*/, '');

// Remove currentPage state
content = content.replace(/const \[currentPage, setCurrentPage\] = useState\(1\);\s*/, '');

// Remove localStorage logic for page
content = content.replace(/const savedPage = localStorage\.getItem\("portfolio-projects-page"\);\s*/, '');
content = content.replace(/if \(savedPage\) setCurrentPage\(parseInt\(savedPage, 10\)\);\s*/, '');
content = content.replace(/localStorage\.setItem\("portfolio-projects-page", currentPage\.toString\(\)\);\s*/, '');

// Update dependency array for useEffect
content = content.replace(/\[tab, selectedYear, currentPage, isMounted\]/, '[tab, selectedYear, isMounted]');

// Remove setCurrentPage(1)
content = content.replace(/setCurrentPage\(1\);\s*/g, '');

// Remove pagination variables
content = content.replace(/const totalPages = Math\.ceil\(yearFiltered\.length \/ PROJECTS_PER_PAGE\);\s*/, '');
content = content.replace(/const paginatedProjects = yearFiltered\.slice\([\s\S]*?\);\s*/, '');

// Change paginatedProjects to yearFiltered
content = content.replace(/items=\{paginatedProjects\}/g, 'items={yearFiltered}');

// Remove pagination JSX block
// It starts with `{/* Pagination */}` and ends before `{/* Project Modal */}`
content = content.replace(/\{\/\* Pagination \*\/\}\s*\{tab !== "workflow"[\s\S]*?\}\)\}\s*\{\/\* Project Modal \*\/\}/, '{/* Project Modal */}');

fs.writeFileSync('components/ProjectsSection.tsx', content, 'utf8');
console.log('Pagination removed successfully.');
