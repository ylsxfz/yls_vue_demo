export default {
  name: 'sys',
  icon: './lib/UEditor/button-icon/sys.png',
  tip: 'sys',
  handler: (editor, name) => {
    editor.execCommand('inserthtml', '<p><span style="border: 1px solid rgb(0, 0, 0); font-family: impact, chicago; color: rgb(127, 127, 127);">https://github.com/sys-projects/</span><span style="border: 1px solid rgb(0, 0, 0); font-family: impact, chicago; background-color: rgb(23, 54, 93); color: rgb(255, 255, 255);">sys-admin</span></p>')
  }
}
