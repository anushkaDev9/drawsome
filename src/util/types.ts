import{ Dispatch, SetStateAction } from 'react'
import { Options } from 'roughjs/bin/core';

export enum Tools {
    Line = "line",
    Rectangle = "rectangle",
    Ellipse = "ellipse",
    Circle = "circle",
    Pointer = "pointer",
}

export type ToolsType = `${Tools}`;

export interface CoordinateInterface {
    x: number;
    y: number;
}

export interface TopBarProps {
    setTool: Dispatch<SetStateAction<ToolsType>>;
    tool: string;
}

export interface GetShapeProps {
    startPoint: CoordinateInterface;
    endPoint: CoordinateInterface;
    shape: string;
    svgRef: React.MutableRefObject<SVGSVGElement | null>;
}

export interface ShapeMethodTypes {
    line: (x1: number, y1: number, x2: number, y2: number, options?: Options | undefined) => SVGGElement;
    rectangle: (x: number, y: number, width: number, height: number, options?: Options | undefined) => SVGGElement;
    ellipse: (x: number, y: number, width: number, height: number, options?: Options | undefined) => SVGGElement;
    circle: (x: number, y: number, diameter: number, options?: Options | undefined) => SVGGElement;
}

export interface GetShapeParamsType {
    startPoint: CoordinateInterface; endPoint: CoordinateInterface;
    shape: string;
}