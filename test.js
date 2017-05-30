import test from 'ava';
import m from '.';

test('throws error on wrong input', t => {
	t.throws(() => m({file: 123}), 'Expected `file` to be of type `string`, got `number`');
});

test('mock context', async t => {
	const ctx = m({
		file: 'path/foo.gif',
		config: {
			unicorn: '🦄'
		}
	});

	t.is(ctx.format, 'gif');
	t.is(ctx.config.get('unicorn'), '🦄');
	t.is(await ctx.filePath(), 'path/foo.gif');
});
