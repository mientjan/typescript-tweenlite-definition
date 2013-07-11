

interface ITweenliteCSS extends CSS3Properties {
	className?: string;
	scaleX?: any;
	rotation?: any;
	shortRotation?: any;
	autoAlpha: number;
}

interface ITweenLiteProperties {
	delay?: number;
	ease?: Function;
	onComplete: Function;
	onCompleteParams: Array;
	useFrames: bool;
	immediateRender: bool;
	onStart: Function;
	onStartParams: Array;
	onUpdate: Function;
	onUpdateParams: Array;
	onReverseCompleteParams: Array;
	paused: bool;

	overwrite: any; // string / number

	width?: number;
	height?: number;

	css?: ITweenliteCSS;
}

class TweenLiteStandard {
	public pause():void;
	public resume():void;
	public restart(): void;
	public reverse(): void;
	public play(): void;
	public seek(time:number): void;
	public timeScale(time:number): void;
	public kill(): void;
}

declare class TweenLite extends TweenLiteStandard
{
	static set(target: any, properties: Object);

	static killTweensOf(target: any, vars?: any);

	static defaultOverwrite(overwrite:string):void;
	static defaultOverwrite(overwrite:bool):void;

	static to(target: any, time: number, css?: ITweenLiteProperties);
	static to(el: HTMLElement, time: number, css?: ITweenLiteProperties, ease?: any): TweenLite;
	static to(el: HTMLElement[], time: number, css?: ITweenLiteProperties, ease?: any): TweenLite;

	static killTweensOf(el: HTMLElement);

	static activate(plugin:any): void;
	static activate(plugin:any[]): void;

	constructor (el: HTMLElement[], time: number, css?: ITweenLiteProperties, ease?: any);
}

declare class Quad
{
	static easeInOut(a:number, b:number, c:number, d:number);
	static easeIn(a:number, b:number, c:number, d:number);
	static easeOut(a:number, b:number, c:number, d:number);
}

declare class Power0
{
	static easeInOut(a:number, b:number, c:number, d:number);
	static easeIn(a:number, b:number, c:number, d:number);
	static easeOut(a:number, b:number, c:number, d:number);
}

declare class Power1
{
	static easeInOut(a:number, b:number, c:number, d:number);
	static easeIn(a:number, b:number, c:number, d:number);
	static easeOut(a:number, b:number, c:number, d:number);
}

declare class Power2
{
	static easeInOut(a:number, b:number, c:number, d:number);
	static easeIn(a:number, b:number, c:number, d:number);
	static easeOut(a:number, b:number, c:number, d:number);
}

declare class Power3
{
	static easeInOut(a:number, b:number, c:number, d:number);
	static easeIn(a:number, b:number, c:number, d:number);
	static easeOut(a:number, b:number, c:number, d:number);
}

declare class Power4
{
	static easeInOut(a:number, b:number, c:number, d:number);
	static easeIn(a:number, b:number, c:number, d:number);
	static easeOut(a:number, b:number, c:number, d:number);
}
