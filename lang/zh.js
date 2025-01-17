var maintext=					'电视节目指南，每日更新';
var loadingtext =				'正在加载';
var errortext =					'错误';
var filetext =					'文件';
var notfoundtext =				'没有找到';
var addall=				'添加全部';
var addselected=				'添加所选';
var moveup=				'上移';
var movedown=				'下移';
var removeselected=				'删除所选';
var removeall =				'删除全部';

var preferenceslink =			'Preferences';
var channelslink =				'节目频道';
var datepickerbutton =			'Go!';
var earliertext =				'更早';
var latertext =					'更晚';

var gridtab =					'Grid';
var displayhourslabel =			'Display Hours';
	var displayhourshint =		'Select the number of hours to display.';
var autosizelabel =				'Automatic table size';
	var autosizehint =			'Check to automatically select a table width based on number of columns. Uncheck to enable the next field.';
var tablewidthlabel =			'Table width (in pixels)';
	var tablewidthhint =		'Specify the width of the table in pixels. Check the above box to set this automatically.';
var offsetminuteslabel =		'Start with next hour after';
	var offsetminuteshint =		'Set the minutes portion of the time after which the grid will start with the next hour on initial load.';
var refreshonthelabel =			'Refresh every hour at';
	var refreshonthehint =		'XSLTv can automatically refresh the listings every hour to keep the grid up-to-date, if the browser is kept open. Select the time each hour to perform the refresh.'
	var norefreshoption =		'Do not refresh';
var timebarfrequencylabel = 	'Time Bar Frequency';
	var timebarfrequencyhint =	'How often to repeat the time header row.';
	var toponlyoption =			'Top Line Only';

var popupstab =					'Popups';
var channelpopupslabel =		'Channel Popups';
	var channelpopupshint =		'Check to enable the popups when the mouse is over the channel names.';
var descriptionpopupslabel =	'Description Popups';
	var descriptionpopupshint =	'Check to enable the popups when the mouse is over a program.';
var popupdelaylabel =			'Popup Delay (in ms)';
	var popupdelayhint =		'Set the delay in milliseconds before popups will appear. Set at 0 to disable delay.';
var popuptimeslabel =			'Times';
	var popuptimeshint =		'Check to show start and end times in the program popups.';
var popupratinglabel =			'Rating';
	var popupratinghint =		'Check to show MPAA ratings in the program popups.';
var popupsubtitlelabel =		'Subtitle';
	var popupsubtitlehint =		'Check to show program subtitles in the program popups.';
var popupdescriptionlabel =		'Description';
	var popupdescriptionhint =	'Check to show program descriptions in the program popups.';
var popupdatelabel =			'Date';
	var popupdatehint =			'Check to show dates in the program popups. Dates are either release dates for movies or first-aired dates for shows.';
var popupcategorieslabel =		'Categories';
	var popupcategorieshint =	'Check to show show categories or genres in the program popups.';
var popupstarratinglabel =		'Star Rating';
	var popupstarratinghint =	'Check to show a graphical star rating in the program popups.';

var localoptionstab =			'Local Options';
var languagelabel =				'Language';
var langbuttontext=				'English';
var fixgapslabel =				'Fix gaps in listings';
	var fixgapshint =			'Check to enable gap-detection in listings which are not contiguous. This option requires listings to be sorted with --by-channel to work. This option will cause listings to load much more slowly, so do not check unnecessarily.';
	var fixgapsconfirm =		'To fill gaps in listings, please ensure the XML file has been sorted with the --by-channel option!';
var absoluteiconslabel =		'Absolute icon references';
	var absoluteiconshint =		'XSLTv looks for channel icons in an \'icons\' directory. Check this box if your xml file contains absolute url references to icons.';
var dayfirstlabel =				'Display day first in dates';
	var dayfirsthint =			'Check this box to show dates in dd/mm/yyyy format. Uncheck for mm/dd/yyyy format.';
var grabberlabel =				'Grabber: tv_grab_';
	var grabberhint =			'Select your grabber to apply localized channel-name settings.';

var otheroptionstab =			'Other Options';
var loadonclicklabel =			'On click:';
	var loadonclicknothing =	'Do Nothing';
	var loadonclickIMDB =		'Search IMDB';
	var loadonclickURL =		'URL in XML';
var categorycolorslabel =		'Category Highlighting';
	var categorycolorshint=		'Select to enable category highlighting (colors must be defined in CSS files). Deselect for a small speed improvement. This is separate from the ratings-based highlighting.';
var dailyfileslabel =			'Use daily files';
	var dailyfileshint=			'Select to use daily files in the format YYYYMMDD.xml instead of a single tv.xml file.';
var highlightclickablelabel =	'Highlight linked programs';
	var highlightclickablehint ='Highlight programs which are linked to a URL (set above). The type of highlighting depends on the stylesheet. It is recommended to disable this if all programs are to be links, or if none are.';
var highlightmovieslabel =		'Highlight movies rated at or over:';
	var highlightmovieshint =	'Highlight movies rated at or over this number of stars. The type of highlighting depends on the stylesheet, but is generally a brighter color. This is separate from the category highlighting below.';
var highlightnewlabel =			'Highlight new shows';
	var highlightnewhint =		'Highlight shows which are airing for the first time. The highlighting is generally a darker or thicker border.';
var printdateslabel =			'Show movie release dates';
	var printdateshint =		'Show movie release dates in the grid. This is separate from the dates in the popup, and only applies to movies.';
var twelvehourlabel =			'Use twelve-hour clock';
	var twelvehourhint =		'Use twelve-hour (with AM and PM) instead of twenty-four-hour clock.';
var showclocklabel =			'Show clock in upper right';
	var showclockhint =			'Check to show current time and date in the top right of page.';
var showbarclocklabel =			'Show clock in top bar';
	var showbarclockhint =		'Check to show current time in the top bar.';
var reloadbutton =				'Reload';
var closebutton =				'Close';

var monthnames =				new Array('1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月');
var shortmonthnames =			new Array('1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月');
var daynames =					new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
var dayletters =				new Array('日', '一', '二', '三', '四', '五', '六');

var alllabel =					'All';
var nonelabel =					'None';
