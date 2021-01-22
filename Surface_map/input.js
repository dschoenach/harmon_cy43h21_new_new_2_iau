
// Input file

title = 'Surface maps'

framec='Teal'

v[0] = ['m']
t[0] = v[0]
v[1] = ['00000000']
t[1] = ['00000000']
v[2] = ['00000000']
t[2] = ['ALL']
v[3] =['ALL'] ;
t[3] = v[3] ;
v[4] = ['PS','FF','GX','DD','TT','TTHA','TN','TX','TD','TDD','RH','QQ','NN','CH','PE1','PE3','PE6','PE12','VI']
t[4] = ['Mslp','U10m','Max Wind Gust','Wind direction','T2m','T2m, height corr.','Min T2m','Max T2m','Td2m','Td2m deficit','Rh2m','Q2m','Cloud cover','Cloud base','1h Precipitation','3h Precipitation','6h Precipitation','12h Precipitation','Visibility']
v[5] =[0]
v[5] =v[5].reverse()
t[5] =v[5]
v[6] =['cy43h21_MSG','cy43h21_MSG_IAU','cy43h21_MSG_2','cy43h21_MSG_2_IAU']
t[6] =v[6]
v[7] =['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'] ;
t[7] = v[7] ;
v[8] = ['b','r'];
t[8] = ['Bias','Rmse'];
v[9] =['ALL'] ;
t[9] = v[9] ;

spec_name =[0,8,1,2,3,9,7,6,4,5]

mname = ['Type','Period','Station','Selection','Parameter','Level','Exp','Hour','Error','Initial time']
loc =['l','l','t','t','t','l','l','l','l','l','l']
do_debug = false ;
pdir ='Surface/'
ext='1.png'
help = 'cca runs with cy43h21 MNWC settings and observations. <br> cy43h21_MSG: cy43h21 with MSGcloudingest <br>  <br> cy43h21_MSG_IAUY: cy43h21 with MSGcloudingest IAU  <br> cy43h21_MSG_2: cy43h21 with MSGcloudingest2  <br> cy43h21_MSG_2_IAU: cy43h21 with MSGcloudingest2 IAU '; hide_help = false ;
do_send = true ;
do_show_remember = true ;
do_remember = true ;
my_con_txt=['Graphics','Quality control','Stat','Stations']
my_con=['All','Surface/quality_[1].html','Surface/TABLE_LL_[1]_[3].html','Surface/[4]_[1].xml']

