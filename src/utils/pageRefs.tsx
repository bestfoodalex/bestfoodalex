import React, { MutableRefObject } from 'react';

export interface PageRefType {
	topRef: MutableRefObject<any>;
	aboutRef: MutableRefObject<any>;
	webRef: MutableRefObject<any>;
	influenceRef: MutableRefObject<any>;
}

export type ScrollToRefFunc = (currRef: string) => any;