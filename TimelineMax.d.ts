declare class TimelineMax {
  constructor(options?:ITimelineMaxOptions);
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

interface ITimelineMaxOptions {
	delay?:number;                // Amount of delay in seconds (or frames for frames-based timelines) before the timeline should begin.
	useFrames?:bool;           // If useFrames is set to true, the timeline's timing mode will be based on frames. Otherwise, it will be based on seconds/time. NOTE?: a TimelineLite's timing mode is always determined by its parent timeline.
	paused?:bool;              // Sets the initial paused state of the timeline (by default, timelines automatically begin playing immediately)
	reversed?:bool;            // If true, the timeline will be reversed initially. This does NOT force it to the very end and start playing backwards. It simply affects the orientation of the timeline, so if reversed is set to true initially, it will appear not to play because it is already at the beginning. To cause it to play backwards from the end, set reversed to true and then set the currentProgress property to 1 immediately after creating the timeline.
	tweens?:any[];                // To immediately insert several tweens into the timeline, use the tweens special property to pass in an Array of TweenLite/TweenMax/TimelineLite/TimelineMax instances. You can use this in conjunction with the align and stagger special properties to set up complex sequences with minimal code. These values simply get passed to the insertMultiple() method.
	align?:string;                // Only used in conjunction with the tweens special property when multiple tweens are to be inserted immediately through the constructor. The value simply gets passed to the insertMultiple() method. The default is TweenAlign.NORMAL. Options are?:

	stagger?:Number;              //Only used in conjunction with the tweens special property when multiple tweens are to be inserted immediately. It staggers the tweens by a set amount of time (in seconds) (or in frames if useFrames is true). For example, if the stagger value is 0.5 and the align property is set to TweenAlign.START, the second tween will start 0.5 seconds after the first one starts, then 0.5 seconds later the third one will start, etc. If the align property is TweenAlign.SEQUENCE, there would be 0.5 seconds added between each tween. This value simply gets passed to the insertMultiple() method. Default is 0.
	onStart?:Function;            //A function that should be called when the timeline begins (the currentProgress won't necessarily be zero when onStart is called. For example, if the timeline is created and then its currentProgress property is immediately set to 0.5 or if its currentTime property is set to something other than zero, onStart will still get fired because it is the first time the timeline is getting rendered.)
	onStartParams?:any[];         //An Array of parameters to pass the onStart function.
	onUpdate?:Function;           //A function that should be called every time the timeline's time/position is updated (on every frame while the timeline is active)
	onUpdateParams?:any[];        //An Array of parameters to pass the onUpdate function
	onComplete?:Function;         //A function that should be called when the timeline has finished
	onCompleteParams?:any[];      //An Array of parameters to pass the onComplete function
	onReverseComplete?:Function;  //A function that should be called when the timeline has reached its starting point again after having been reversed
	onReverseCompleteParams?:any[]; //An Array of parameters to pass the onReverseComplete functions
	onRepeat?:Function;           //A function that should be called every time the timeline repeats
	onRepeatParams?:any[];        //An Array of parameters to pass the onRepeat function
	autoRemoveChildren?:bool;  //If autoRemoveChildren is set to true, as soon as child tweens/timelines complete, they will automatically get killed/removed. This is normally undesireable because it prevents going backwards in time (like if you want to reverse() or set the currentProgress value to a lower value, etc.). It can, however, improve speed and memory management. TweenLite's root timelines use autoRemoveChildren?:true.
	repeat?:number;                  //Number of times that the timeline should repeat. To repeat indefinitely, use -1.
	repeatDelay?:number;          //Amount of time in seconds (or frames for frames-based timelines) between repeats.
	yoyo?:bool;                //Works in conjunction with the repeat property, determining the behavior of each cycle. When yoyo is true, the timeline will go back and forth, appearing to reverse every other cycle (this has no affect on the reversed property though). So if repeat is 2 and yoyo is false, it will look like?: start - 1 - 2 - 3 - 1 - 2 - 3 - 1 - 2 - 3 - end. But if repeat is 2 and yoyo is true, it will look like?: start - 1 - 2 - 3 - 3 - 2 - 1 - 1 - 2 - 3 - end.
	onStartListener?:Function;    //A function to which the TimelineMax instance should dispatch a TweenEvent when it begins. This is the same as doing myTimeline.addEventListener(TweenEvent.START, myFunction);
	onUpdateListener?:Function;   //A function to which the TimelineMax instance should dispatch a TweenEvent every time it updates values. This is the same as doing myTimeline.addEventListener(TweenEvent.UPDATE, myFunction);
	onCompleteListener?:Function; //A function to which the TimelineMax instance should dispatch a TweenEvent when it completes. This is the same as doing myTimeline.addEventListener(TweenEvent.COMPLETE, myFunction);
}
