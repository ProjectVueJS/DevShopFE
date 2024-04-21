export var adminSideBar = {
    vi: [
        {
            name: "Bảng Điều Khiển",
            icon: "pi pi-home",
            linkTo: "/dashboard",
            active: false,
            child: []
        },
        {
            name: "Quản Lý Sản Phẩm",
            icon: "pi pi-th-large",
            linkTo: "#",
            active: false,
            child: []
        },
        {
            name: "Quản Lý Danh Mục",
            icon: "pi pi-list",
            linkTo: "#",
            active: false,
            child: []
        },
        {
            name: "Quản Lý Khách Hàng",
            icon: "pi pi-users",
            linkTo: "#",
            active: false,
            child: []
        },
        {
            name: "Quản Lý Đơn Hàng",
            icon: "pi pi-receipt",
            linkTo: "#",
            active: false,
            child: []
        },
        {
            name: "Quản Trị",
            icon: "pi pi-microchip",
            linkTo: "#",
            active: false,
            child: [
                {
                    name: "Quản Lý Tài Khoản",
                    linkTo: "/user-management",
                    active: false
                },
                {
                    name: "Cộng Tác Viên",
                    linkTo: "#",
                    active: false
                },
                {
                    name: "Vai Trò & Quyền",
                    linkTo: "#",
                    active: false
                },
            ]
        },
        {
            name: "Cài đặt",
            icon: "pi pi-cog",
            linkTo: "#",
            active: false,
            child: [
                {
                    name: "Cài đặt chung",
                    linkTo: "#",
                    active: false
                },
            ]
        },
    ],
    en: [
        {
            name: "Dashboard",
            icon: "pi pi-home",
            linkTo: "/dashboard",
            active: false,
            child: []
        },
        {
            name: "Product Management",
            icon: "pi pi-th-large",
            linkTo: "#",
            active: false,
            child: []
        },
        {
            name: "Category Management",
            icon: "pi pi-list",
            linkTo: "#",
            active: false,
            child: []
        },
        {
            name: "Customer Management",
            icon: "pi pi-users",
            linkTo: "#",
            active: false,
            child: []
        },
        {
            name: "Order Management",
            icon: "pi pi-receipt",
            linkTo: "#",
            active: false,
            child: []
        },
        {
            name: "Administration",
            icon: "pi pi-microchip",
            linkTo: "#",
            active: false,
            child: [
                {
                    name: "User Management",
                    linkTo: "/user-management",
                    active: false
                },
                {
                    name: "Collaborators",
                    linkTo: "#",
                    active: false
                },
                {
                    name: "Role & Permission",
                    linkTo: "#",
                    active: false
                },
            ]
        },
        {
            name: "Settings",
            icon: "pi pi-cog",
            linkTo: "#",
            active: false,
            child: [
                {
                    name: "General Settings",
                    linkTo: "#",
                    active: false
                },
            ]
        },
    ]
}

export var adminMenuAvata = {
    en: [
        {
            name: 'My Account',
            active: false,
            linkTo: '#',
            action: ''
        },
        {
            name: 'Logout',
            active: false,
            linkTo: '#',
            action: 'logout'
        },
    ],
    vi: [
        {
            name: 'Tài khoản của tôi',
            active: false,
            linkTo: '#',
            action: ''
        },
        {
            name: 'Đăng xuất',
            active: false,
            linkTo: '#',
            action: 'logout'
        },
    ]
}
export var MenuLanguage = {
    en: [
        {
            name: 'English',
            active: true,
            linkTo: '#',
            code: 'en'
        },
        {
            name: 'Vietnamese',
            active: false,
            linkTo: '#',
            code: 'vi'
        },
    ],
    vi: [
        {
            name: 'Tiếng Việt',
            active: true,
            linkTo: '#',
            code: 'vi'
        },
        {
            name: 'Tiếng Anh',
            active: false,
            linkTo: '#',
            code: 'en'
        },
    ]
}
