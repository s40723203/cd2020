var tipuesearch = {"pages": [{'title': 'WEEK', 'text': '', 'tags': '', 'url': 'WEEK.html'}, {'title': 'WEEK1~5', 'text': 'week1 \n 建立個人倉儲cd2020 \n 影片網址: https://www.youtube.com/watch?v=G0QF1s-XpHY&feature=youtu.be \n \n \n week2 \n 將Python3.7.3更新至Python3.8.2 \n 1.在2019fall裡新建cd2020的資料夾 \n 2. 在cd2020裡新建data 資料夾，再到data裡面新建分別為py382、 wscite432、portablegit的3個資料夾 \n 3 .到Python網站，滑至最下面點選 ，路徑設定到data \n *選項pip不要勾選 \n 4.下載 \xa0 full 64-bit download系統至wscite432並解壓縮 \n 5.新建start.bat和stop.bat \n start.bat內容 \n \n stop.bat內容 \n \n 6.下載 \xa0 msys2-x86_64-20190524.exe，路徑設定到data \n 7.下載64-bit Git for Windows Portable \xa0，路徑設定到\xa0 portablegit \n 8.開啟https://bootstrap.pypa.io/get-pip.py，另存新檔至data \n 9.開啟小黑框並打上python get-pip.py，完成後在打上pip install flask bs4 lxml pelican markdown flask_cors leo \n 影片網址: \n Assignment 1 \n 新建msys64、home、portablegit、wscite237、tcc等資料夾 \n 下載 到 portablegit 並且開啟 下載 到 msys64 並且開啟 下載 到 wscite237 並解壓縮 開啟Scite，點選Options的 Global Options File 打開line number, 找到139和300行將其更改(如下圖所示) \n 139行 \n \n 300行 \n 另存\xa0 https://bootstrap.pypa.io/get-pip.py \xa0到data目錄下 新增start 和stop到data 開啟strat打python get pip.py確定使用的版本 \n git clone tcc  pip xxxxx xxxxx \n', 'tags': '', 'url': 'WEEK1~5.html'}, {'title': 'WEEK6~10', 'text': '', 'tags': '', 'url': 'WEEK6~10.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};