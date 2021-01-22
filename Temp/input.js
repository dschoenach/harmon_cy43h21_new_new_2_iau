

title = 'Temp verification' 

framec='Goldenrod'

v[0] = ['V','V_VAR','PS','ps'];
t[0] = ['Fc length ver','Fc length var','Timeserie stat','Timeserie'];
v[1] = ['00000000']
t[1] = ['00000000']
v[2] = ['00000000']
t[2] = ['ALL']
v[3] = ['ALL'] ;
t[3] = v[3] ;
v[4] = ['TT','TD','FF','DD','FI','RH','QQ'];
t[4] = ['Temperature','Dew point T','Wind speed','Wind direction','Geopotential','Relative humidity','Specific humidity']
v[5] = ['925','850','700','500','300','200','150','100','50'] ;
v[5] = v[5].reverse()
t[5] = v[5]
v[6] = ['ALL','00','12'] ;
t[6] = v[6] ;
mname = ['Type','Period','Station','Selection','Parameter','Level','Initial time']
loc = ['l','l','t','t','t','l','l']
spec_name =[0,1,2,3,6,4,5]

do_debug = false ; ;

help = 'cca runs with cy43h21 MNWC settings and observations. <br> cy43h21_MSG: cy43h21 with MSGcloudingest <br>  <br> cy43h21_MSG_IAUY: cy43h21 with MSGcloudingest IAU  <br> cy43h21_MSG_2: cy43h21 with MSGcloudingest2  <br> cy43h21_MSG_2_IAU: cy43h21 with MSGcloudingest2 IAU '; hide_help = false ;
pdir ='Temp/'
ext='1.png'
do_send = true ;
do_show_remember = true ;
do_remember = true ;
my_con_txt=['Graphics','Quality control','Stat']
my_con=['All','Temp/quality_[1].html','Temp/TABLE_LL_[1]_[3].html']
