const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.TileMovement,
		C3.Plugins.Keyboard,
		C3.Behaviors.Bullet,
		C3.Plugins.Touch,
		C3.Behaviors.Pathfinding,
		C3.Plugins.progressbar,
		C3.Plugins.Text,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.System.Exps.max,
		C3.Plugins.System.Exps.min,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Behaviors.TileMovement.Acts.SimulateControl,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Cnds.Repeat,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Exps.zeropad,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Pathfinding.Acts.StartMoving,
		C3.Behaviors.Pathfinding.Acts.FindPath,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{sky: 0},
	{ДвижениеПоКлеткам: 0},
	{bee: 0},
	{Solar: 0},
	{Keyboard: 0},
	{Toxic: 0},
	{Neutral: 0},
	{Пуля: 0},
	{bug: 0},
	{poison: 0},
	{game_FON2: 0},
	{down: 0},
	{up: 0},
	{buttonright: 0},
	{buttonleft: 0},
	{Тач: 0},
	{ПоискПути: 0},
	{toxicbee: 0},
	{Индикатор: 0},
	{HealthBar: 0},
	{BEEBIGTOXIC: 0},
	{beebignewMINI: 0},
	{HealthBar2: 0},
	{fon4: 0},
	{TimerText: 0},
	{SolarCount: 0},
	{ToxicCount: 0},
	{flowerminitoxicbig: 0},
	{flowerminisolarbig: 0},
	{right1: 0},
	{left1: 0},
	{up1: 0},
	{frame: 0},
	{down1: 0},
	{plashka: 0},
	{honey: 0},
	{ecology: 0},
	{frame2: 0},
	{SolarScore: 0},
	{SolarEcology: 0},
	{retry: 0},
	{SolarCount2: 0},
	{downnew: 0},
	{solar2final: 0},
	{beefinal: 0},
	{пример: 0},
	{FlowerCount: 0},
	{BeeHealth: 0},
	{BeeHealth2: 0},
	{TimeLeft: 0},
	{ToxicScore: 0},
	{ToxicEcology: 0},
	{RetryCreated: 0}
];

self.InstanceType = {
	sky: class extends self.ISpriteInstance {},
	bee: class extends self.ISpriteInstance {},
	Solar: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Toxic: class extends self.ISpriteInstance {},
	Neutral: class extends self.ISpriteInstance {},
	bug: class extends self.ISpriteInstance {},
	poison: class extends self.ISpriteInstance {},
	game_FON2: class extends self.ISpriteInstance {},
	down: class extends self.ISpriteInstance {},
	up: class extends self.ISpriteInstance {},
	buttonright: class extends self.ISpriteInstance {},
	buttonleft: class extends self.ISpriteInstance {},
	Тач: class extends self.IInstance {},
	toxicbee: class extends self.ISpriteInstance {},
	Индикатор: class extends self.IProgressBarInstance {},
	HealthBar: class extends self.ISpriteInstance {},
	BEEBIGTOXIC: class extends self.ISpriteInstance {},
	beebignewMINI: class extends self.ISpriteInstance {},
	HealthBar2: class extends self.ISpriteInstance {},
	fon4: class extends self.ISpriteInstance {},
	TimerText: class extends self.ITextInstance {},
	SolarCount: class extends self.ITextInstance {},
	ToxicCount: class extends self.ITextInstance {},
	flowerminitoxicbig: class extends self.ISpriteInstance {},
	flowerminisolarbig: class extends self.ISpriteInstance {},
	right1: class extends self.ISpriteInstance {},
	left1: class extends self.ISpriteInstance {},
	up1: class extends self.ISpriteInstance {},
	frame: class extends self.ISpriteInstance {},
	down1: class extends self.ISpriteInstance {},
	plashka: class extends self.ISpriteInstance {},
	honey: class extends self.ISpriteInstance {},
	ecology: class extends self.ISpriteInstance {},
	frame2: class extends self.ISpriteInstance {},
	SolarScore: class extends self.ITextInstance {},
	SolarEcology: class extends self.ITextInstance {},
	retry: class extends self.ISpriteInstance {},
	SolarCount2: class extends self.ITextInstance {},
	downnew: class extends self.ISpriteInstance {},
	solar2final: class extends self.ISpriteInstance {},
	beefinal: class extends self.ISpriteInstance {},
	пример: class extends self.ISpriteInstance {}
}