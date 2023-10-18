export default defineAppConfig({
  ui: {
    strategy: 'override',
    size: 'md',
    primary: 'blue',
    accordion: {
      "item": {
        "base": "bg-gray-50/30 px-6 pt-3 mt-2.5 rounded-md",
      },
      "default": {
        "class": "py-3 w-full bg-transparent text-black hover:text-blue-500",
      },
    }
  }
})