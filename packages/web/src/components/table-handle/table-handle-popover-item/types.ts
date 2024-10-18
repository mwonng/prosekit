import type { EventDeclarations, PropDeclarations } from '@aria-ui/core'
import {
  menuItemEvents,
  type MenuItemEvents,
  type MenuItemProps,
  menuItemProps,
} from '@aria-ui/menu'

export interface TableHandlePopoverItemProps extends MenuItemProps {}

/** @internal */
export const tableHandlePopoverItemProps: PropDeclarations<TableHandlePopoverItemProps> =
  {
    ...menuItemProps,
  }

export interface TableHandlePopoverItemEvents extends MenuItemEvents {}

/** @internal */
export const tableHandlePopoverItemEvents: EventDeclarations<TableHandlePopoverItemEvents> =
  {
    ...menuItemEvents,
  }