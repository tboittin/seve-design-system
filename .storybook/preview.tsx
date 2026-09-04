import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'creme',
      values: [
        { name: 'crème', value: '#FDFBF7' },
        { name: 'blanc', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
};

export default preview;