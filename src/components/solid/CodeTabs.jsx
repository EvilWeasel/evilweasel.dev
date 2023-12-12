import { createSignal, For } from "solid-js";

const CodeTabs = (props) => {
  const [selectedTab, setSelectedTab] = createSignal(0);
  const codeBlockList = props.codeBlockList;

  return (
    <div class="code-tabs">
      <div class="tab-buttons">
        <For each={codeBlockList}>
          {(block, index) => (
            <button
              onClick={() => setSelectedTab(index)}
              class={selectedTab() === index ? "selected" : ""}
            >
              {block.filename} ({block.lang})
            </button>
          )}
        </For>
      </div>
      <pre class="astro-code dracula">
        <code>{codeBlockList[selectedTab()].code}</code>
      </pre>
    </div>
  );
};

export default CodeTabs;
