import React ,{ useRef }from "react";
import {  Editor ,RichUtils } from 'draft-js'
import italic from "../assets/icons/italic-icon.svg";
import bold from "../assets/icons/bold-icon.svg";
import underline from "../assets/icons/underline-icon.svg";
import classes from "./RichEditor.module.css";
import "draft-js/dist/Draft.css";
import { useFormikContext } from "formik";

const RichEditor = ({ editorState, handleChange, label,name }) => {
	const { touched,setFieldTouched,errors } = useFormikContext();

	const editor = useRef(null);

	const handleUtil = (styleType) => {
		const newState = RichUtils.handleKeyCommand(editorState, styleType);
		if (newState) {
			handleChange(newState);
			return "handled";
		}

		return "not-handled";
	};

	const handleKeyCommand = (command, editorState) => {
		const newState = RichUtils.handleKeyCommand(editorState, command);

		if (newState) {
			handleChange(newState);
			return "handled";
		}

		return "not-handled";
	};

	const focusEditor = () => {
    setFieldTouched(name,true)
		editor.current.focus();
	};

	const isActive = (style) => {
		return editorState.getCurrentInlineStyle().has(style);
	};
	return (
    <>
		<div className={classes.editorContainer}>
			{label && (
				<label
					htmlFor="description"
					style={{ fontWeight: "500", color: "#193B68" }}
				>
					{label}
				</label>
			)}

			<div className={classes.utilTray}>
				<button
					type="button"
					className={classes.EditorUtil}
					onClick={() => handleUtil("bold")}
					style={{
						backgroundColor: isActive("BOLD") ? "#6780A2" : "transparent",
					}}
				>
					<img src={bold} height="15" alt="" />
				</button>
				<button
					type="button"
					className={classes.EditorUtil}
					onClick={() => handleUtil("italic")}
					style={{
						backgroundColor: isActive("ITALIC") ? "#6780A2" : "transparent",
					}}
				>
					<img src={italic} height="15" alt="" />
				</button>
				<button
					type="button"
					className={classes.EditorUtil}
					onClick={() => handleUtil("underline")}
					style={{
						backgroundColor: isActive("UNDERLINE") ? "#6780A2" : "transparent",
					}}
				>
					<img src={underline} height="15" alt="" />
				</button>
			</div>
			<div
				id="description"
				onClick={focusEditor}
				className={classes.descriptionArea}
        style={{
          backgroundColor:  (touched[name] && errors[name]) && '#FFF3F1',
          border: (touched[name] && errors[name]) && '1px solid #EB5757'
        }}
			>
				<Editor
					ref={editor}
					editorState={editorState}
					handleKeyCommand={handleKeyCommand}
					onChange={handleChange}
					autoCorrect="on"
					autoCapitalize="on"
					placeholder="Type description here"
					// readOnly = 'true'
					spellCheck={true}
				/>
			</div>
		</div>
			<span className="app-error">{ touched[name] && errors[name]}</span>
    </>
	);
};

export default RichEditor;
