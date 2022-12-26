/**
 * File: extension.ts
 * Description: Extension that adds accessible buttons for the undo and redo commands
 * Author: Héctor Álvarez Fernández
 * License: MIT
 */

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  // Define the commands that will be executed when the buttons are clicked
  const undoCommand = 'undo-redo-buttons.undo';
  const redoCommand = 'undo-redo-buttons.redo';
  context.subscriptions.push(vscode.commands.registerCommand(undoCommand, undo));
  context.subscriptions.push(vscode.commands.registerCommand(redoCommand, redo));

  // Create the undo button
  const undoButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
  undoButton.text = 'Undo';
  undoButton.color = 'var(--vscode-tab-activeBorder)';
  undoButton.command = undoCommand;
  undoButton.show();

  // Create the redo button
  const redoButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
  redoButton.text = 'Redo';
  redoButton.color = 'var(--vscode-tab-activeBorder)';
  redoButton.command = redoCommand;
  redoButton.show();
}

function undo() {
  // Perform the undo action when the button is clicked
  vscode.commands.executeCommand('undo');
}

function redo() {
  // Perform the redo action when the button is clicked
  vscode.commands.executeCommand('redo');
}

export function deactivate() {}