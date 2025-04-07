import { Router } from "vue-router";
import { MENU_OPTS, IDX_MENU_OPTS } from "../constants/constants";

export interface BreadCrumb {
  title: string;
  path: string;
}

export class Menu {
  static goToView(idxSelected: string, router: Router): void {
    switch (idxSelected) {
      case IDX_MENU_OPTS.IDX_DASHBOARD:
      case IDX_MENU_OPTS.IDX_REQUEST_IMPORT:
        router.push("/request-import-list");
        break;
      case IDX_MENU_OPTS.IDX_DECIDE_IMPORT:
      case IDX_MENU_OPTS.IDX_HISTORY_IMPORT:
      case IDX_MENU_OPTS.IDX_TRANSACTION_INVOICE_IMPORT:
      case IDX_MENU_OPTS.IDX_HANDLE_IMPORT:
      case IDX_MENU_OPTS.IDX_ERROR_GOODS_LIST:
      case IDX_MENU_OPTS.IDX_IMPORT_GOODS_LIST:
      case IDX_MENU_OPTS.IDX_PURCHASE_ORDER_LIST:
      case IDX_MENU_OPTS.IDX_CREATE_PURCHASE_ORDER:
      case IDX_MENU_OPTS.IDX_INVENTORT_LIST:
      case IDX_MENU_OPTS.IDX_CREATE_REQUEST:
      case IDX_MENU_OPTS.IDX_GOODS:
      case IDX_MENU_OPTS.IDX_PROVIDER:
      case IDX_MENU_OPTS.IDX_CATEGORY:
        router.push("/category-list");
        break;
      case IDX_MENU_OPTS.IDX_VOUCHER:
      case IDX_MENU_OPTS.IDX_STORAGE:
      default:
        console.error(`Unhandled idxSelected: ${idxSelected}`);
        break;
    }
  }

  static getBreadCrumb(idxSelected: string): BreadCrumb[] {
    switch (idxSelected) {
      case IDX_MENU_OPTS.IDX_DASHBOARD:
        return [{ title: MENU_OPTS.DASHBOARD, path: "/" }];
      case IDX_MENU_OPTS.IDX_REQUEST_IMPORT:
        return [
          { title: MENU_OPTS.INTENTED_IMPORT, path: "/" },
          { title: MENU_OPTS.REQUEST_IMPORT, path: "/" },
        ];
      case IDX_MENU_OPTS.IDX_DECIDE_IMPORT:
        return [
          { title: MENU_OPTS.INTENTED_IMPORT, path: "/" },
          { title: MENU_OPTS.DECIDE_IMPORT, path: "/" },
        ];
      case IDX_MENU_OPTS.IDX_HISTORY_IMPORT:
        return [
          { title: MENU_OPTS.INTENTED_IMPORT, path: "/" },
          { title: MENU_OPTS.HISTORY_IMPORT, path: "/" },
        ];
      case IDX_MENU_OPTS.IDX_TRANSACTION_INVOICE_IMPORT:
        return [
          { title: MENU_OPTS.INTENTED_IMPORT, path: "/" },
          { title: MENU_OPTS.TRANSACTION_INVOICE_IMPORT, path: "/" },
        ];
      case IDX_MENU_OPTS.IDX_HANDLE_IMPORT:
        return [
          { title: MENU_OPTS.IMPORT, path: "/" },
          { title: MENU_OPTS.HANDLE_IMPORT, path: "/" },
        ];
      case IDX_MENU_OPTS.IDX_ERROR_GOODS_LIST:
        return [
          { title: MENU_OPTS.IMPORT, path: "/" },
          { title: MENU_OPTS.ERROR_GOODS_LIST, path: "/" },
        ];
      case IDX_MENU_OPTS.IDX_IMPORT_GOODS_LIST:
        return [
          { title: MENU_OPTS.IMPORT, path: "/" },
          { title: MENU_OPTS.IMPORT_GOODS_LIST, path: "/" },
        ];
      case IDX_MENU_OPTS.IDX_PURCHASE_ORDER_LIST:
        return [
          { title: MENU_OPTS.INTENTED_EXPORT, path: "/" },
          { title: MENU_OPTS.PURCHASE_ORDER_LIST, path: "/" },
        ];
      case IDX_MENU_OPTS.IDX_CREATE_PURCHASE_ORDER:
        return [
          { title: MENU_OPTS.INTENTED_EXPORT, path: "/" },
          { title: MENU_OPTS.CREATE_PURCHASE_ORDER, path: "/" },
        ];
      case IDX_MENU_OPTS.IDX_INVENTORT_LIST:
        return [
          { title: MENU_OPTS.INVENTORY, path: "/" },
          { title: MENU_OPTS.INVENTORT_LIST, path: "/" },
        ];
      case IDX_MENU_OPTS.IDX_CREATE_REQUEST:
        return [
          { title: MENU_OPTS.INVENTORY, path: "/" },
          { title: MENU_OPTS.CREATE_REQUEST, path: "/" },
        ];
      case IDX_MENU_OPTS.IDX_GOODS:
        return [
          { title: MENU_OPTS.MANAGEMENT, path: "/" },
          { title: MENU_OPTS.GOODS, path: "/" },
        ];
      case IDX_MENU_OPTS.IDX_PROVIDER:
        return [
          { title: MENU_OPTS.MANAGEMENT, path: "/" },
          { title: MENU_OPTS.PROVIDER, path: "/" },
        ];
      case IDX_MENU_OPTS.IDX_CATEGORY:
        return [
          { title: MENU_OPTS.MANAGEMENT, path: "/" },
          { title: MENU_OPTS.CATEGORY, path: "/" },
        ];
      case IDX_MENU_OPTS.IDX_VOUCHER:
        return [
          { title: MENU_OPTS.MANAGEMENT, path: "/" },
          { title: MENU_OPTS.VOUCHER, path: "/" },
        ];
      case IDX_MENU_OPTS.IDX_STORAGE:
        return [
          { title: MENU_OPTS.MANAGEMENT, path: "/" },
          { title: MENU_OPTS.STORAGE, path: "/" },
        ];
    }
    return [];
  }
}
