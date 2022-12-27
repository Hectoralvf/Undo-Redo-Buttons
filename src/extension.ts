/**
 * Author: Héctor Álvarez Fernández
 * License: MIT
 */

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.commands.registerCommand('undo-redo-buttons.undo', undo));
  context.subscriptions.push(vscode.commands.registerCommand('undo-redo-buttons.redo', redo));
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