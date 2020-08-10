declare namespace FormikModuleScssNamespace {
    export interface IFormikModuleScss {
        error: string;
        file: string;
        form: string;
        mappings: string;
        names: string;
        sources: string;
        sourcesContent: string;
        version: string;
    }
}

declare const FormikModuleScssModule: FormikModuleScssNamespace.IFormikModuleScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: FormikModuleScssNamespace.IFormikModuleScss;
};

export = FormikModuleScssModule;
