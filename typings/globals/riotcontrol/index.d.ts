// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/7de6c3dd94feaeb21f20054b9f30d5dabc5efabd/riotcontrol/riotcontrol.d.ts
declare namespace RiotControl {
	interface Store {
		on(events: string, fn: Function): Store;
		one(name: string, fn: Function): Store;
		off(events: string, fn?: Function): Store;
		trigger(name: string, ...args: any[]): Store;
	}

	var _stores: Store[];

	function addStore(store: Store): void;

	function on(events: string, fn: Function): void;
	function one(name: string, fn: Function): void;
	function off(events: string, fn?: Function): void;
	function trigger(name: string, ...args: any[]): void;
}

declare module "riotcontrol" {
	export = RiotControl;
}
