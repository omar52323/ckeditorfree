import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root', // o providedIn: tu módulo si lo prefieres
  })
export class DataProvider {
    private _nav: string;
    private _detail: boolean;
    private _current: any;
    private _currentWf: any[] = [];
    private _token: string;
    private _attempts: number;
    private _permissions: Permissions;
    private _origin: string;
    private _moduleTitle: any[] = [];
    private _schemaForm: any;

    public get origin(): string {
        return this._origin;
    }
    public set origin(value: string) {
        this._origin = value;
    }

    get nav(): string {
        return this._nav ? this._nav : '';
    }
    set nav(value: string) {
        this._nav = value;
    }

    get detail(): boolean {
        return this._detail ? this._detail : false;
    }
    set detail(value: boolean) {
        this._detail = value;
    }

    get token(): string {
        return this._token ? this._token : '';
    }
    set token(value: string) {
        this._token = value;
    }

    get permissions(): Permissions {
        return this._permissions;
    }
    set permissions(value: Permissions) {
        this._permissions = value;
    }

    private _context: string;
    get context(): string {
        return this._context ? this._context : '';
    }
    set context(value: string) {
        this._context = value;
    }

    private _lang: string;
    get lang(): string {
        return this._lang ? this._lang : 'es';
    }
    set lang(value: string) {
        this._lang = value;
    }

    get attempts(): number {
        return this._attempts ? this._attempts : 0;
    }
    set attempts(value: number) {
        this._attempts = value;
    }


    set params(value: any) {
        sessionStorage.setItem(`params`, JSON.stringify(value));
    }

 

    /************************* WF ****************************/

    set clientId(value: number) {
        sessionStorage.setItem(`clientId`, JSON.stringify(value));
    }

    get moduleTitle(): any[] {
        return this._moduleTitle || null;
    }

    set moduleTitle(value: any[]) {
        this._moduleTitle = value;
    }
    get schemaForm(): any {
        return this._schemaForm || null;
    }

    set schemaForm(value: any) {
        this._schemaForm = value;
    }
}
