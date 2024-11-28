import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'tzasfks6',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
  token: 'skLdLPXFPbi7YiAbxckfEzQqqjK4IDm3HwKRreNuzG6WRw0lVrfw1uZX2lv34B0VROMphFtJ0XijjcWyeuQ21NyyYJVLl2OHTOwk09ElEQ2TjWgQk5jRtWoI6rbq5XFPMOFTBLYiv7JjUGnV9ILpWzLuB7zkcejnVf6PCzXIge9mJrqF5pib',
});