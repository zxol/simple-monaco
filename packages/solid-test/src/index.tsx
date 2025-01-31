/* @refresh reload */
import { createSignal } from "solid-js";
import { render } from "solid-js/web";
import Monaco from "@uwu/monaco-solid/src";

render(() => {
  const [val, setVal] = createSignal("");
  const [lang, setLang] = createSignal("javascript");
  const [theme, setTheme] = createSignal("Monokai");
  const [ro, setRo] = createSignal(false);

  const [fontSize, setFontSize] = createSignal(16);

  return (
    <>
      <h1>Monaco solid test</h1>
      <Monaco
        value={val()}
        lang={lang()}
        valOut={setVal}
        theme={theme()}
        readonly={ro()}
        otherCfg={{ fontSize: fontSize() }}
      />
      <pre>
        <code>{val()}</code>
      </pre>
      <button onclick={() => setVal("")}>clear</button>
      <input
        type="text"
        onchange={(e) => setLang((e.target as HTMLInputElement).value)}
      />
      <input
        type="text"
        onchange={(e) => setTheme((e.target as HTMLInputElement).value)}
      />
      <input
        id="ro"
        type="checkbox"
        onchange={(e) => setRo((e.target as HTMLInputElement).checked)}
      />
      <label for="ro">readonly</label>
      <input
        type="text"
        onchange={(e) =>
          setFontSize(parseFloat((e.target as HTMLInputElement).value))
        }
      />
    </>
  );
}, document.querySelector("body") as HTMLElement);
