// Type definitions for react-leaflet 1.1
// Project: https://github.com/PaulLeCam/react-leaflet
// Definitions by: Dave Leaver <https://github.com/danzel>, David Schneider <https://github.com/davschne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as Leaflet from 'leaflet';
import * as React from 'react';

// All events need to be lowercase so they don't collide with React.DOMAttributes<T>
// which already declares things with some of the same names

type Children = React.ReactNode | React.ReactNode[];

export interface MapEvents {
    onclick?(event: Leaflet.MouseEvent): void;
    ondblclick?(event: Leaflet.MouseEvent): void;
    onmousedown?(event: Leaflet.MouseEvent): void;
    onmouseup?(event: Leaflet.MouseEvent): void;
    onmouseover?(event: Leaflet.MouseEvent): void;
    onmouseout?(event: Leaflet.MouseEvent): void;
    onmousemove?(event: Leaflet.MouseEvent): void;
    oncontextmenu?(event: Leaflet.MouseEvent): void;
    onfocus?(event: Leaflet.Event): void;
    onblur?(event: Leaflet.Event): void;
    onpreclick?(event: Leaflet.MouseEvent): void;
    onload?(event: Leaflet.Event): void;
    onunload?(event: Leaflet.Event): void;
    onviewreset?(event: Leaflet.Event): void;
    onmove?(event: Leaflet.Event): void;
    onmovestart?(event: Leaflet.Event): void;
    onmoveend?(event: Leaflet.Event): void;
    ondragstart?(event: Leaflet.Event): void;
    ondrag?(event: Leaflet.Event): void;
    ondragend?(event: Leaflet.DragEndEvent): void;
    onzoomstart?(event: Leaflet.Event): void;
    onzoomend?(event: Leaflet.Event): void;
    onzoomlevelschange?(event: Leaflet.Event): void;
    onresize?(event: Leaflet.ResizeEvent): void;
    onautopanstart?(event: Leaflet.Event): void;
    onlayeradd?(event: Leaflet.LayerEvent): void;
    onlayerremove?(event: Leaflet.LayerEvent): void;
    onbaselayerchange?(event: Leaflet.LayersControlEvent): void;
    onoverlayadd?(event: Leaflet.LayersControlEvent): void;
    onoverlayremove?(event: Leaflet.LayersControlEvent): void;
    onlocationfound?(event: Leaflet.LocationEvent): void;
    onlocationerror?(event: Leaflet.ErrorEvent): void;
    onpopupopen?(event: Leaflet.PopupEvent): void;
    onpopupclose?(event: Leaflet.PopupEvent): void;
}

interface MarkerEvents {
    onclick?(event: Leaflet.MouseEvent): void;
    ondblclick?(event: Leaflet.MouseEvent): void;
    onmousedown?(event: Leaflet.MouseEvent): void;
    onmouseover?(event: Leaflet.MouseEvent): void;
    onmouseout?(event: Leaflet.MouseEvent): void;
    oncontextmenu?(event: Leaflet.MouseEvent): void;
    ondragstart?(event: Leaflet.Event): void;
    ondrag?(event: Leaflet.Event): void;
    ondragend?(event: Leaflet.DragEndEvent): void;
    onmove?(event: Leaflet.Event): void;
    onadd?(event: Leaflet.Event): void;
    onremove?(event: Leaflet.Event): void;
    onpopupopen?(event: Leaflet.PopupEvent): void;
    onpopupclose?(event: Leaflet.PopupEvent): void;
}

interface TileLayerEvents {
    onloading?(event: Leaflet.Event): void;
    onload?(event: Leaflet.Event): void;
    ontileloadstart?(event: Leaflet.TileEvent): void;
    ontileload?(event: Leaflet.TileEvent): void;
    ontileunload?(event: Leaflet.TileEvent): void;
    ontileerror?(event: Leaflet.TileEvent): void;
}

interface PathEvents {
    onclick?(event: Leaflet.MouseEvent): void;
    ondblclick?(event: Leaflet.MouseEvent): void;
    onmousedown?(event: Leaflet.MouseEvent): void;
    onmouseover?(event: Leaflet.MouseEvent): void;
    onmouseout?(event: Leaflet.MouseEvent): void;
    oncontextmenu?(event: Leaflet.MouseEvent): void;
    onadd?(event: Leaflet.Event): void;
    onremove?(event: Leaflet.Event): void;
    onpopupopen?(event: Leaflet.PopupEvent): void;
    onpopupclose?(event: Leaflet.PopupEvent): void;
}

interface FeatureGroupEvents {
    onclick?(event: Leaflet.MouseEvent): void;
    ondblclick?(event: Leaflet.MouseEvent): void;
    onmouseover?(event: Leaflet.MouseEvent): void;
    onmouseout?(event: Leaflet.MouseEvent): void;
    oncontextmenu?(event: Leaflet.MouseEvent): void;
    onlayeradd?(event: Leaflet.LayerEvent): void;
    onlayerremove?(event: Leaflet.LayerEvent): void;
}

interface LayersControlEvents {
    onbaselayerchange?(event: Leaflet.LayersControlEvent): void;
    onoverlayadd?(event: Leaflet.LayersControlEvent): void;
    onoverlayremove?(event: Leaflet.LayersControlEvent): void;
}

type LeafletEvents = MapEvents
    & MarkerEvents
    & TileLayerEvents
    & PathEvents
    & FeatureGroupEvents
    & LayersControlEvents;

export class MapComponent<P, E extends Leaflet.Class> extends React.Component<P, {}> {
    _leafletEvents: LeafletEvents;
    leafletElement: E;
    extractLeafletEvents(props: P): LeafletEvents;
    bindLeafletEvents(next: LeafletEvents, prev: LeafletEvents): LeafletEvents;
    fireLeafletEvent(type: string, data: any): void;
    getOptions(props: P): P;
}

export interface MapProps extends MapEvents, Leaflet.MapOptions, Leaflet.LocateOptions, Leaflet.FitBoundsOptions {
    animate?: boolean;
    bounds?: Leaflet.LatLngBoundsExpression;
    boundsOptions?: Leaflet.FitBoundsOptions;
    center?: Leaflet.LatLngExpression;
    children?: Children;
    className?: string;
    id?: string,
    maxBounds?: Leaflet.LatLngBoundsExpression;
    maxZoom?: number;
    minZoom?: number;
    style?: React.CSSProperties;
    useFlyTo?: boolean;
    zoom?: number;
}

export class Map<P extends MapProps, E extends Leaflet.Map> extends MapComponent<P, E> {
    className?: string;
    container: HTMLDivElement;
    getChildContext(): { layerContainer: E, map: E };
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
    bindContainer(container: HTMLDivElement): void;
    shouldUpdateCenter(next: Leaflet.LatLngExpression, prev: Leaflet.LatLngExpression): boolean;
    shouldUpdateBounds(next: Leaflet.LatLngBoundsExpression, prev: Leaflet.LatLngBoundsExpression): boolean;
}

export interface PaneProps {
    name?: string;
    children?: Children;
    map?: Leaflet.Map;
    className?: string;
    style?: React.CSSProperties;
    pane?: string;
}
export interface PaneState {
    name?: string;
}
export class Pane<P extends PaneProps, S extends PaneState> extends React.Component<P, S> {
    getChildContext(): { pane: string };
    createPane(props: P): void;
    removePane(): void;
    setStyle(arg: { style?: string, className?: string }): void;
    getParentPane(): HTMLElement | undefined;
    getPane(name: string): HTMLElement | undefined;
}

export interface MapLayerProps {
    children?: Children;
}
export interface LayerContainer {
    addLayer(layer: Leaflet.Layer): this;
    removeLayer(layer: number | Leaflet.Layer): this;
}
export class MapLayer<P extends MapLayerProps, E extends Leaflet.Class> extends MapComponent<P, E> {
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
    readonly layerContainer: LayerContainer | Leaflet.Map;
}

export interface GridLayerProps extends Leaflet.GridLayerOptions {
    children?: Children;
}
export class GridLayer<P extends GridLayerProps, E extends Leaflet.GridLayer> extends MapLayer<P, E> {}

export interface TileLayerProps extends TileLayerEvents, Leaflet.TileLayerOptions {
    children?: Children;
    url: string;
}
export class TileLayer<P extends TileLayerProps, E extends Leaflet.TileLayer> extends GridLayer<P, E> { }

export interface WMSTileLayerProps extends TileLayerEvents, Leaflet.WMSOptions {
    children?: Children;
    url: string;
}
export class WMSTileLayer<P extends WMSTileLayerProps, E extends Leaflet.TileLayer.WMS> extends GridLayer<P, E> { }

export interface ImageOverlayProps extends Leaflet.ImageOverlayOptions {
    bounds: Leaflet.LatLngBoundsExpression;
    children?: Children;
    url: string;
}
export class ImageOverlay<P extends ImageOverlayProps, E extends Leaflet.ImageOverlay> extends MapLayer<P, E> {
    getChildContext(): { popupContainer: E };
}

export interface LayerGroupProps {
    children?: Children;
}
export class LayerGroup<P extends LayerGroupProps, E extends Leaflet.LayerGroup> extends MapLayer<P, E> {
    getChildContext(): { layerContainer: E };
}

export interface MarkerProps extends MarkerEvents, Leaflet.MarkerOptions {
    children?: Children;
    position: Leaflet.LatLngExpression;
}
export class Marker<P extends MarkerProps, E extends Leaflet.Marker> extends MapLayer<P, E> {
    getChildContext(): { popupContainer: E };
}

export interface PathProps extends PathEvents, Leaflet.PathOptions { }
export abstract class Path<P extends PathProps, E> extends MapLayer<P, E> {
    getChildContext(): { popupContainer: E };
    getPathOptions(props: P): Leaflet.PathOptions;
    setStyle(options: Leaflet.PathOptions): void;
    setStyleIfChanged(fromProps: P, toProps: P): void;
}

export interface CircleProps extends PathEvents, Leaflet.CircleMarkerOptions {
    center: Leaflet.LatLngExpression;
    children?: Children;
    radius: number;
}
export class Circle<P extends CircleProps, E extends Leaflet.Circle> extends Path<P, E> { }

export interface CircleMarkerProps extends PathEvents, Leaflet.CircleMarkerOptions {
    center: Leaflet.LatLngExpression;
    children?: Children;
    radius: number;
}
export class CircleMarker<P extends CircleMarkerProps, E extends Leaflet.CircleMarker> extends Path<P, E> { }

export interface FeatureGroupProps extends FeatureGroupEvents, Leaflet.PathOptions {
    children?: Children;
}
export class FeatureGroup<P extends FeatureGroupProps, E extends Leaflet.FeatureGroup> extends Path<P, E> {
    getChildContext(): { layerContainer: E, popupContainer: E };
}

export interface GeoJSONProps extends FeatureGroupEvents, Leaflet.GeoJSONOptions {
    children?: Children;
    data: GeoJSON.GeoJsonObject;
    style?: Leaflet.StyleFunction;
}
export class GeoJSON<P extends GeoJSONProps, E extends Leaflet.GeoJSON> extends Path<P, E> { }

export interface PolylineProps extends PathEvents, Leaflet.PolylineOptions {
    children?: Children;
    positions: Leaflet.LatLngExpression[] | Leaflet.LatLngExpression[][];
}
export class Polyline<P extends PolylineProps, E extends Leaflet.Polyline> extends Path<P, E> { }

export interface PolygonProps extends PathEvents, Leaflet.PolylineOptions {
    children?: Children;
    popupContainer?: Leaflet.FeatureGroup;
    positions: Leaflet.LatLngExpression[] | Leaflet.LatLngExpression[][] | Leaflet.LatLngExpression[][][];
}
export class Polygon<P extends PolygonProps, E extends Leaflet.Polygon> extends Path<P, E> { }

export interface RectangleProps extends PathEvents, Leaflet.PolylineOptions {
    children?: Children;
    bounds: Leaflet.LatLngBoundsExpression;
    popupContainer?: Leaflet.FeatureGroup;
}
export class Rectangle<P extends RectangleProps, E extends Leaflet.Rectangle> extends Path<P, E> { }

export interface PopupProps extends Leaflet.PopupOptions {
    children?: Children;
    position?: Leaflet.LatLngExpression;
}
export class Popup<P extends PopupProps, E extends Leaflet.Popup> extends MapComponent<P, E> {
    onPopupOpen(arg: { popup: E }): void;
    onPopupClose(arg: { popup: E }): void;
    renderPopupContent(): void;
    removePopupContent(): void;
}

export interface TooltipProps extends Leaflet.TooltipOptions {
    children?: Children;
}
export class Tooltip<P extends TooltipProps, E extends Leaflet.Tooltip> extends MapComponent<P, E> {
    onTooltipOpen(arg: { tooltip: E }): void;
    onTooltipClose(arg: { tooltip: E }): void;
    renderTooltipContent(): void;
    removeTooltipContent(): void;
}

export interface MapControlProps extends Leaflet.ControlOptions { }
export class MapControl<P extends MapControlProps, E extends Leaflet.Control> extends React.Component<P, {}> {
    leafletElement: E;
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
}

export interface AttributionControlProps extends Leaflet.Control.AttributionOptions { }
export class AttributionControl<P extends AttributionControlProps, E extends Leaflet.Control.Attribution> extends MapControl<P, E> { }

export interface LayersControlProps extends LayersControlEvents, Leaflet.Control.LayersOptions {
    baseLayers?: Leaflet.Control.LayersObject;
    children?: Children;
    overlays?: Leaflet.Control.LayersObject;
}
export class LayersControl<P extends AttributionControlProps, E extends Leaflet.Control.Layers> extends MapControl<P, E> { }

export namespace LayersControl {
    interface BaseControlledLayerProps {
        checked?: boolean;
        children?: Children;
        removeLayer?(layer: Leaflet.Layer): void;
        removeLayerControl?(layer: Leaflet.Layer): void;
    }
    interface ControlledLayerProps extends BaseControlledLayerProps {
        addBaseLayer?(layer: Leaflet.Layer, name: string, checked: boolean): void;
        addOverlay?(layer: Leaflet.Layer, name: string, checked: boolean): void;
        name: string;
    }
    class ControlledLayer<P extends BaseControlledLayerProps> extends React.Component<P, {}> {
        layer?: Leaflet.Layer;
        getChildContext(): { layerContainer: LayerContainer };
        addLayer(): void;
        removeLayer(layer: Leaflet.Layer): void;
    }
    export class BaseLayer<P extends ControlledLayerProps> extends ControlledLayer<P> { }
    export class Overlay<P extends ControlledLayerProps> extends ControlledLayer<P> { }
}

export interface ScaleControlProps extends Leaflet.Control.ScaleOptions { }
export class ScaleControl<P extends ScaleControlProps, E extends Leaflet.Control.Scale> extends MapControl<P, E> { }

export interface ZoomControlProps extends Leaflet.Control.ZoomOptions { }
export class ZoomControl<P extends ZoomControlProps, E extends Leaflet.Control.Zoom> extends MapControl<P, E> { }
