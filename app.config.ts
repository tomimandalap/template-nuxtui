import menu from "@/constants/menu"

export default defineAppConfig({
  title: 'Go Learn',
  navbar: {
    base: 'fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800',
    container: 'px-3 py-3.5 lg:px-5',
    wrapper: 'flex items-center justify-between',
  },
  sidebar: {
    menu,
    base: 'fixed top-0 left-0 z-40 sm:w-64 w-16 h-screen border-r border-gray-200 dark:border-gray-800 transition-all delay-75',
    title: 'my-2.5 text-sm font-semibold',
    show: 'sm:translate-x-0',
    hide: '-translate-x-full invisible',
    container: {
      base: 'h-full px-3 py-20 overflow-y-auto bg-white dark:bg-gray-900',
      list: 'space-y-2 py-1.5 font-medium'
    },
    link: {
      base: 'flex items-center text-black dark:text-white hover:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-950 rounded-md px-2.5 transition-all ',
      miniBase: 'flex justify-between items-center px-2 py-1.5 rounded-md',
      active: 'bg-blue-50 dark:bg-blue-950 text-blue-500 dark:text-blue-400 cursor-no-drop',
      miniActive: 'bg-blue-50 dark:bg-blue-950 text-blue-500 dark:text-blue-400 cursor-no-drop',
      wrapper: 'flex items-center w-full',
      icon: 'w-5 h-5',
      label: 'text-sm truncate'
    },
    padding: {
      base: 'py-0.5',
      icon: 'py-0.5',
      count: 'py-2.5'
    }
  },
  breadcrumb: {
    wrapper: 'mt-12',
    ul: 'inline-flex items-center space-x-2',
    li: 'inline-flex items-center capitalize text-sm',
    link: {
      wrapper: 'flex items-center',
      hover: 'hover:text-blue-500 hover:underline',
      inactive: 'text-gray-400 cursor-no-drop',
    },
    default: {
      icon: 'i-iconoir-nav-arrow-right',
      path: '/admin/incomes',
    }
  },
  ui: {
    strategy: 'override',
    size: 'md',
    primary: 'blue',
    accordion: {
      "item": {
        "base": "bg-gray-300/10 dark:bg-gray-800/10 mt-1 rounded-md",
        "padding": "pt-3 pb-1 px-3",
      },
      "default": {
        "class": "py-2.5 w-full bg-transparent dark:bg-transparent text-black hover:text-blue-500",
      },
    },
    toggle: {
      "default": {
        "onIcon": 'i-iconoir-moon-sat',
        "offIcon": 'i-iconoir-sun-light',
      },
    },
    notifications: {
      position: 'top-0 right-0'
    },
    button: {
      "default": {
        "loadingIcon": "i-iconoir-system-restart",
        size: "lg"
      }
    },
    dropdown: {
      background: "bg-white dark:bg-gray-900",
      item: {
        base: "group flex items-center gap-5 w-full my-1",
        active: 'text-blue-500 dark:text-blue-400',
        inactive: "text-black dark:text-white",
      }
    },
    input: {
      "wrapper": "relative w-full",
      icon: {
        trailing: {
          pointer: ''
        }
      },
      default: {
        "size": "md",
      }
    },
    formGroup: {
      "error": "mt-2 text-xs text-red-500 dark:text-red-400",
    },
    table: {
      loadingState: {
        label: 'text-md text-center',
        icon: 'w-10 h-10 mx-auto mb-4 animate-spin',
      },
      emptyState: {
        label: 'text-md text-center',
        icon: 'w-10 h-10 mx-auto mb-4',
      },
      default: {
        loadingState: {
          icon: 'i-iconoir-system-restart',
          label: 'Loading...',
        },
        emptyState: {
          icon: 'i-iconoir-multiple-pages-empty',
          label: 'Data not available',
        },
      },
    },
    pagination: {
      default: {
        prevButton: {
          "icon": "i-iconoir-nav-arrow-left"
        },
        nextButton: {
          "icon": "i-iconoir-nav-arrow-right"
        }
      }
    }
  }
})