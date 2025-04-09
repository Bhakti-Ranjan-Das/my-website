/*
  # Add sample blog posts

  1. Changes
    - Insert initial blog posts into the `posts` table with meaningful content
*/

INSERT INTO posts (title, content, excerpt, slug, created_at)
VALUES
  (
    'Getting Started with React and TypeScript',
    E'# Getting Started with React and TypeScript\n\nTypeScript has become the standard for building scalable React applications. In this post, we''ll explore how to set up a new React project with TypeScript and best practices for type safety.\n\n## Why TypeScript?\n\nTypeScript adds static typing to JavaScript, which helps catch errors early in development and improves code maintainability.\n\n## Setting Up Your Project\n\n1. Create a new project using Vite\n2. Configure TypeScript\n3. Add essential types\n\n## Best Practices\n\n- Always define prop types for components\n- Use interfaces for complex objects\n- Leverage type inference when possible\n\n## Conclusion\n\nTypeScript might seem daunting at first, but its benefits far outweigh the initial learning curve.',
    'Learn how to set up a React project with TypeScript and discover best practices for type safety in your applications.',
    'getting-started-with-react-and-typescript',
    NOW() - INTERVAL '5 days'
  ),
  (
    'Building Responsive Layouts with Tailwind CSS',
    E'# Building Responsive Layouts with Tailwind CSS\n\nTailwind CSS has revolutionized how we style web applications. Let''s dive into creating responsive layouts that work seamlessly across all devices.\n\n## The Power of Utility Classes\n\nTailwind''s utility-first approach provides incredible flexibility while maintaining consistency in your designs.\n\n## Responsive Design Basics\n\n- Mobile-first approach\n- Breakpoint system\n- Flex and Grid utilities\n\n## Common Patterns\n\n1. Navigation menus\n2. Card layouts\n3. Hero sections\n\n## Performance Considerations\n\nLearn how to optimize your Tailwind CSS builds for production.',
    'Discover how to create beautiful, responsive layouts using Tailwind CSS''s utility-first approach.',
    'building-responsive-layouts-with-tailwind-css',
    NOW() - INTERVAL '3 days'
  ),
  (
    'Modern Backend Development with Node.js',
    E'# Modern Backend Development with Node.js\n\nExplore the latest features and best practices for building scalable backend services with Node.js and Express.\n\n## Async/Await Patterns\n\nModern Node.js development leverages async/await for cleaner, more maintainable code.\n\n## API Design Principles\n\n- RESTful conventions\n- Error handling\n- Validation strategies\n\n## Security Best Practices\n\n1. Input validation\n2. Authentication\n3. Rate limiting\n\n## Deployment Strategies\n\nLearn about different deployment options and their trade-offs.',
    'Learn about modern backend development practices using Node.js, including API design, security, and deployment strategies.',
    'modern-backend-development-with-nodejs',
    NOW() - INTERVAL '1 day'
  );