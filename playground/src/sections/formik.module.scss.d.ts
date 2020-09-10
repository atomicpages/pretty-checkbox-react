declare namespace FormikModuleScssNamespace {
    export interface IFormikModuleScss {
        error: string;
        form: string;
    }
}

declare const FormikModuleScssModule: FormikModuleScssNamespace.IFormikModuleScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: FormikModuleScssNamespace.IFormikModuleScss;
};

export = FormikModuleScssModule;
