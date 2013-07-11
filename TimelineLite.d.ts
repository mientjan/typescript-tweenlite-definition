///<reference path="TweenLite.d.ts" />

declare class TimelineLite extends TweenLiteStandard
{
  constructor ();

	public append(tween: TweenLite, offset?: number);
	public append(func: Function, offset?: number);

	public to();
	public staggerTo();
	public call(fn: Function);
	
	to(target: any, durationSeconds: number, properties: Object, offset?:string):TimelineLite;
	to(target: any, durationSeconds: number, properties: Object, offset?:number):TimelineLite;

	add(value: any, position?: string, stagger?: number ):TimelineLite;
	add(value: any, position?: number, stagger?: number ):TimelineLite;

	set(target: any, properties: Object, offset?:string):TimelineLite;
	set(target: any, properties: Object, offset?:number):TimelineLite;
	
	play():TimelineLite;
	pause():TimelineLite;
	stop():TimelineLite;

	kill():void;
	killTweensOf():void;

	totalDuration():number;
	totalProgress():number;
	totalTime():number;

	insert(tween:any, timeOrLabel?:number);

	append(tween:any, offset?:string):TimelineLite;

	tweenTo(timeOrLabel:any, vars?:any);

	gotoAndStop(timeOrLabel:any, suppressEvents?:bool);
	gotoAndPlay(timeOrLabel:any, suppressEvents?:bool);

	reverse(forceResume?:bool);

	addLabel(label:string, time?:number):TimelineLite;

	addCallback(callback: () => void, timeOrLabel:number, params?:any):TimelineLite;
	addCallback(callback: () => void, timeOrLabel:string, params?:any):TimelineLite;

	timeScale(scale:number):TimelineLite;
	timeScale():number;

	currentLabel:string;
	currentProgress:number;
	repeat:number;
	repeatDelay:number;
	yoyo:bool;
}
