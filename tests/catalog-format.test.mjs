import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import ts from 'typescript';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function loadTypeScriptModule(relativePath) {
  const filePath = resolve(projectRoot, relativePath);
  const source = readFileSync(filePath, 'utf8');
  const output = ts.transpile(source, {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020,
  });
  const module = { exports: {} };
  const localRequire = createRequire(filePath);

  new Function('module', 'exports', 'require', output)(
    module,
    module.exports,
    localRequire
  );
  return module.exports;
}

test('featured routes follow the curated presentation order', () => {
  const { featuredProducts } = loadTypeScriptModule('src/data/products.ts');
  assert.deepEqual(
    featuredProducts.map(({ slug }) => slug),
    [
      'valle-de-guadalupe-tres-casas-boutique-con-sommelier',
      'ruta-de-los-siete-moles-de-oaxaca',
      'ruta-de-la-cochinita-y-los-sabores-del-mayab',
      'ruta-de-mariscos-en-la-costa-de-sinaloa',
      'ruta-del-maiz-criollo-en-la-mixteca',
      'ruta-del-mole-poblano-y-la-cocina-conventual',
      'ruta-del-queso-y-vino-queretaro',
      'ruta-del-cafe-de-veracruz-coatepec-xico-coscomatepec',
    ]
  );
});

test('MXN prices use the same two-decimal format in both locales', () => {
  const { formatMXN, formatMXNCompact } = loadTypeScriptModule('src/lib/format.ts');

  assert.equal(formatMXN(2800, 'es'), 'MXN$2,800.00');
  assert.equal(formatMXN(2800, 'en'), 'MXN$2,800.00');
  assert.equal(formatMXN(1250.5, 'es'), 'MXN$1,250.50');
  assert.equal(formatMXNCompact(2800, 'en'), formatMXN(2800, 'en'));
});
