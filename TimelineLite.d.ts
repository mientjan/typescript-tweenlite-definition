///<reference path="TweenLite.d.ts" />

declare class TimelineLite extends TweenLiteStandard
{
  constructor ();

	public append(tween: TweenLite, offset?: number);
	public append(func: Function, offset?: number);

	public to();
	public staggerTo();
	public call(fn: Function);
}
