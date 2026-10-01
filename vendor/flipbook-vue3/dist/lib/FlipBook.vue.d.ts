declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    pages: {
        type: ArrayConstructor;
        required: true;
    };
    pagesHiRes: {
        type: ArrayConstructor;
        default: () => never[];
    };
    flipDuration: {
        type: NumberConstructor;
        default: number;
    };
    zoomDuration: {
        type: NumberConstructor;
        default: number;
    };
    zooms: {
        type: ArrayConstructor;
        default: () => number[];
    };
    perspective: {
        type: NumberConstructor;
        default: number;
    };
    nPolygons: {
        type: NumberConstructor;
        default: number;
    };
    ambient: {
        type: NumberConstructor;
        default: number;
    };
    gloss: {
        type: NumberConstructor;
        default: number;
    };
    swipeMin: {
        type: NumberConstructor;
        default: number;
    };
    singlePage: {
        type: BooleanConstructor;
        default: boolean;
    };
    forwardDirection: {
        validator: (val: unknown) => val is "right" | "left";
        default: string;
    };
    centering: {
        type: BooleanConstructor;
        default: boolean;
    };
    startPage: {
        type: NumberConstructor;
        default: null;
    };
    loadingImage: {
        type: StringConstructor;
        default: any;
    };
    clickToZoom: {
        type: BooleanConstructor;
        default: boolean;
    };
    dragToFlip: {
        type: BooleanConstructor;
        default: boolean;
    };
    wheel: {
        type: StringConstructor;
        default: string;
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {
    viewWidth: number;
    viewHeight: number;
    imageWidth: null;
    imageHeight: null;
    displayedPages: number;
    nImageLoad: number;
    nImageLoadTrigger: number;
    imageLoadCallback: null;
    currentPage: number;
    firstPage: number;
    secondPage: number;
    zoomIndex: number;
    zoom: number;
    zooming: boolean;
    touchStartX: null;
    touchStartY: null;
    maxMove: number;
    activeCursor: null;
    hasTouchEvents: boolean;
    hasPointerEvents: boolean;
    isFlipping: boolean;
    minX: number;
    maxX: number;
    preloadedImages: {};
    flip: {
        progress: number;
        direction: null;
        frontImage: null;
        backImage: null;
        auto: boolean;
        opacity: number;
    };
    currentCenterOffset: null;
    animatingCenter: boolean;
    startScrollLeft: number;
    startScrollTop: number;
    scrollLeft: number;
    scrollTop: number;
    loadedImages: {};
}, {
    IE(): boolean;
    canFlipLeft(): boolean;
    canFlipRight(): boolean;
    canZoomIn(): boolean;
    canZoomOut(): boolean;
    numPages(): number;
    page(): number;
    zooms_(): unknown[];
    canGoForward(): boolean;
    canGoBack(): boolean;
    leftPage(): number;
    rightPage(): number;
    showLeftPage(): {} | null;
    showRightPage(): boolean | null;
    cursor(): "auto" | "zoom-in" | "zoom-out" | "grab";
    pageScale(): number;
    pageWidth(): number;
    pageHeight(): number;
    xMargin(): number;
    yMargin(): number;
    polygonWidth(): string;
    polygonHeight(): string;
    polygonBgSize(): string;
    polygonArray(): any[][];
    boundingLeft(): number;
    boundingRight(): number;
    centerOffset(): number;
    centerOffsetSmoothed(): number;
    dragToScroll(): boolean;
    scrollLeftMin(): number;
    scrollLeftMax(): number;
    scrollTopMin(): number;
    scrollTopMax(): number;
    scrollLeftLimited(): number;
    scrollTopLimited(): number;
}, {
    onResize(): void;
    fixFirstPage(): void;
    pageUrl(page: any, hiRes?: boolean): {} | null;
    pageUrlLoading(page: any, hiRes?: boolean): any;
    flipLeft(): void;
    flipRight(): void;
    makePolygonArray(face: any): any[][];
    computeLighting(rot: any, dRotate: any): string;
    flipStart(direction: any, auto: any): Promise<void>;
    delay(time: any): Promise<any>;
    flipAuto(ease: any): void;
    flipRevert(): void;
    onImageLoad(trigger: any, cb: any): void;
    didLoadImage(ev: any): void;
    zoomIn(zoomAt?: null): void;
    zoomOut(zoomAt?: null): void;
    zoomTo(zoom: any, zoomAt?: null): void;
    zoomAt(zoomAt: any): void;
    swipeStart(touch: any): void;
    swipeMove(touch: any): boolean;
    swipeEnd(touch: any): void;
    onTouchStart(ev: any): void;
    onTouchMove(ev: any): void;
    onTouchEnd(ev: any): void;
    onPointerDown(ev: any): void;
    onPointerMove(ev: any): void;
    onPointerUp(ev: any): void;
    onMouseDown(ev: any): void;
    onMouseMove(ev: any): void;
    onMouseUp(ev: any): void;
    dragScroll(x: any, y: any): void;
    onWheel(ev: any): void;
    preloadImages(hiRes?: boolean): void;
    goToPage(p: any): void;
    loadImage(url: any): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("flip-left-start" | "flip-left-end" | "flip-right-start" | "flip-right-end" | "zoom-start" | "zoom-end")[], "flip-left-start" | "flip-left-end" | "flip-right-start" | "flip-right-end" | "zoom-start" | "zoom-end", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    pages: {
        type: ArrayConstructor;
        required: true;
    };
    pagesHiRes: {
        type: ArrayConstructor;
        default: () => never[];
    };
    flipDuration: {
        type: NumberConstructor;
        default: number;
    };
    zoomDuration: {
        type: NumberConstructor;
        default: number;
    };
    zooms: {
        type: ArrayConstructor;
        default: () => number[];
    };
    perspective: {
        type: NumberConstructor;
        default: number;
    };
    nPolygons: {
        type: NumberConstructor;
        default: number;
    };
    ambient: {
        type: NumberConstructor;
        default: number;
    };
    gloss: {
        type: NumberConstructor;
        default: number;
    };
    swipeMin: {
        type: NumberConstructor;
        default: number;
    };
    singlePage: {
        type: BooleanConstructor;
        default: boolean;
    };
    forwardDirection: {
        validator: (val: unknown) => val is "right" | "left";
        default: string;
    };
    centering: {
        type: BooleanConstructor;
        default: boolean;
    };
    startPage: {
        type: NumberConstructor;
        default: null;
    };
    loadingImage: {
        type: StringConstructor;
        default: any;
    };
    clickToZoom: {
        type: BooleanConstructor;
        default: boolean;
    };
    dragToFlip: {
        type: BooleanConstructor;
        default: boolean;
    };
    wheel: {
        type: StringConstructor;
        default: string;
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    "onFlip-left-start"?: ((...args: any[]) => any) | undefined;
    "onFlip-left-end"?: ((...args: any[]) => any) | undefined;
    "onFlip-right-start"?: ((...args: any[]) => any) | undefined;
    "onFlip-right-end"?: ((...args: any[]) => any) | undefined;
    "onZoom-start"?: ((...args: any[]) => any) | undefined;
    "onZoom-end"?: ((...args: any[]) => any) | undefined;
}>, {
    wheel: string;
    pagesHiRes: unknown[];
    flipDuration: number;
    zoomDuration: number;
    zooms: unknown[];
    perspective: number;
    nPolygons: number;
    ambient: number;
    gloss: number;
    swipeMin: number;
    singlePage: boolean;
    forwardDirection: string;
    centering: boolean;
    startPage: number;
    loadingImage: string;
    clickToZoom: boolean;
    dragToFlip: boolean;
    alt: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
