declare namespace SectionModuleScssNamespace {
    export interface ISectionModuleScss {
        file: string;
        link: string;
        mappings: string;
        names: string;
        sources: string;
        sourcesContent: string;
        version: string;
    }
}

declare const SectionModuleScssModule: SectionModuleScssNamespace.ISectionModuleScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: SectionModuleScssNamespace.ISectionModuleScss;
};

export = SectionModuleScssModule;
