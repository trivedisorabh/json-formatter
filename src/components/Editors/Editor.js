import React, { useRef, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import EditorActions from "./EditorActions";

import "monaco-editor/esm/vs/editor/contrib/hover/hover.js";
import "monaco-editor/esm/vs/editor/browser/controller/coreCommands.js";
import "monaco-editor/esm/vs/editor/contrib/find/findController.js";
import "monaco-editor/esm/vs/editor/contrib/folding/folding.js";
import "monaco-editor/esm/vs/editor/contrib/bracketMatching/bracketMatching.js";
import "monaco-editor/esm/vs/language/json/monaco.contribution";
import "monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js";
import "monaco-editor/esm/vs/editor/contrib/wordHighlighter/wordHighlighter.js";
import "monaco-editor/esm/vs/editor/contrib/wordOperations/wordOperations.js";
import "monaco-editor/esm/vs/editor/contrib/rename/rename.js";
import "monaco-editor/esm/vs/editor/contrib/multicursor/multicursor.js";
import "monaco-editor/esm/vs/editor/contrib/smartSelect/smartSelect.js";
import "monaco-editor/esm/vs/editor/contrib/format/formatActions.js";
import "monaco-editor/esm/vs/editor/contrib/inPlaceReplace/inPlaceReplace.js";
import "monaco-editor/esm/vs/editor/contrib/linesOperations/linesOperations.js";

function Editor({ editorConfig, modelType, value }) {
  const editorContainer = useRef(null);
  useEffect(() => {
    if (editorContainer.current) {
      editorConfig.createEditor(editorContainer.current);
      if (modelType === "json") {
        editorConfig.createJsonModel(value);
      }
    }
    return () => {
      editorConfig.destroy();
    };
  }, [modelType, editorConfig]);
  return (
    <Fragment>
      <div
        ref={editorContainer}
        css={`
          height: 100%;
          width: 100%;
        `}
      />
      <EditorActions editorConfig={editorConfig} />
    </Fragment>
  );
}

Editor.defaultProps = {
  value: ``,
  modelType: "json",
};

Editor.propTypes = {
  value: PropTypes.string,
  modelType: PropTypes.string,
  editorConfig: PropTypes.any.isRequired,
};

export default Editor;
