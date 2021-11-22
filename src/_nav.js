import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilArrowCircleTop,
  cilArrowThickFromTop,
  cilBell,
  cilCalculator,
  cilChartPie,
  cilChatBubble,
  cilCode,
  cilControl,
  cilCursor,
  cilDrop,
  cilImage,
  cilNewspaper,
  cilNotes,
  cilPaint,
  cilPencil,
  cilPuzzle,
  cilSettings,
  cilSpeaker,
  cilSpeedometer,
  cilStar,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Admin System',
  },
  {
    component: CNavGroup,
    name: 'Posts Management',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'User Posts',
        to: '/icons/coreui-icons',
        badge: {
          color: 'danger',
          text: '99+',
        },
      },
      {
        component: CNavItem,
        name: 'Admin Posts',
        to: '/icons/coreui-icons',
        badge: {
          color: 'danger',
          text: '99+',
        },
      },
    ],
  },
  {
    component: CNavItem,
    name: 'User Management',
    to: '/theme/colors',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Blog Management',
    to: '/theme/colors',
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Advertising Management',
    to: '/theme/colors',
    icon: <CIcon icon={cilSpeaker} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Banner Management',
    to: '/theme/colors',
    icon: <CIcon icon={cilImage} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'User Reports',
    to: '/theme/colors',
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Account & Settings',
  },
  {
    component: CNavItem,
    name: 'Profile',
    to: '/theme/colors',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Settings',
    to: '/theme/colors',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Log out',
    to: '/theme/colors',
    icon: <CIcon icon={cilArrowCircleTop} customClassName="nav-icon" />,
  },
]

export default _nav
