///<reference path="TweenLite.d.ts" />

declare class TimelineLite extends TweenLiteStandard
{
  constructor ();

	public append(tween: TweenLite, offset?: number);
	public append(func: Function, offset?: number);

	public to();
	public staggerTo();
	public call(fn: Function);
	
	to(target: any, durationSeconds: number, properties: Object, offset?:string):TimelineMax;
	to(target: any, durationSeconds: number, properties: Object, offset?:number):TimelineMax;

	add(value: any, position?: string, stagger?: number ):TimelineMax;
	add(value: any, position?: number, stagger?: number ):TimelineMax;

	set(target: any, properties: Object, offset?:string):TimelineMax;
	set(target: any, properties: Object, offset?:number):TimelineMax;
	
	play():TimelineMax;
	pause():TimelineMax;
	stop():TimelineMax;

	kill():void;
	killTweensOf():void;

	totalDuration():number;
	totalProgress():number;
	totalTime():number;

	insert(tween:any, timeOrLabel?:number);

	append(tween:any, offset?:string):TimelineMax;

	tweenTo(timeOrLabel:any, vars?:any);

	gotoAndStop(timeOrLabel:any, suppressEvents?:bool);
	gotoAndPlay(timeOrLabel:any, suppressEvents?:bool);

	reverse(forceResume?:bool);

	addLabel(label:string, time?:number):TimelineMax;

	addCallback(callback: () => void, timeOrLabel:number, params?:any):TimelineMax;
	addCallback(callback: () => void, timeOrLabel:string, params?:any):TimelineMax;

	timeScale(scale:number):TimelineMax;
	timeScale():number;

	currentLabel:string;
	currentProgress:number;
	repeat:number;
	repeatDelay:number;
	yoyo:bool;
}
