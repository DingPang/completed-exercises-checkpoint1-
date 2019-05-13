/* eslint-disable no-unused-vars */
function BrowserWindow(accountName, windowName,tabs) {
    this.accountName=accountName;
    this.windowName=windowName;
    this.tabs=[{tabURL: 'defaultHomePage.com'}];
}

BrowserWindow.prototype.joinwindow= function(){
    this.tabs.join();
}
BrowserWindow.prototype.newTab = function(arr){
    tab1={tabURL: arr};
    this.tabs.push(tab1);
}
BrowserWindow.prototype.closeTab = function(num){
    return this.tabs.slice(0,num) +this.tabs.slice(num+1,this.tabs.length);
}