export default function () {
  // TODO: implement RBAC

  const hasRole = (roles?: string | string[]): boolean => {
    // if (roles === undefined)
    //   return true
    // if (!user.value)
    //   return false
    // if (!user.value.level || user.value.level === 0)
    //   return false

    // if (Array.isArray(roles))
    //   return roles.includes(user.value.level)

    // return roles === user.value.level


    if (roles === undefined) return

    if (roles.includes('super_admin')) return true;

    if (roles.includes('admin')) return false

    // return true
  }

  return {
    hasRole,
  }
}
