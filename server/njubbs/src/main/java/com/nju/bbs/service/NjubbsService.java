package com.nju.bbs.service;

/**
 * Created by 361pa on 2017/5/29.
 */

public class NjubbsService {


   // public Map getTop10(){
//        Map<String, Object>  result = new HashMap<String, Object>();
//        Document doc = null;
//        try {
//            doc = Jsoup.connect("http://bbs.nju.edu.cn/bbstop10").get();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        Elements trs = doc.select("table").select("tr");
//        List resultList = new ArrayList<Top10>();
//        for(int i = 0;i<trs.size();i++){
//            Elements tds = trs.get(i).select("td");
//            if (i==0){
//                continue;
//            }
//            Top10 top10 = new Top10();
//            for(int j = 0;j<tds.size();j++){
//                String text = tds.get(j).text();
//                switch (j){
//                    case 0:
//                        top10.setId(text);
//                        break;
//                    case 1:
//                        top10.setZone(text);
//                        break;
//                    case 2:
//                        String href = null;
//                        String pattern= "href=\"([^\"]*)\"";
//                        Pattern pKey = Pattern.compile(pattern, 2 | Pattern.DOTALL);
//                        Matcher mKey = pKey.matcher(tds.get(j).toString());
//                        if(mKey.find()) {
//                            System.out.print(mKey.group(1).replace(";", "&"));
//                            href = "http://bbs.nju.edu.cn/" + mKey.group(1).replace(";", "&");
//                            top10.setHref(href);
//
//                        }
//                        top10.setTitle(text);
//                        break;
//                    case 3:
//                        top10.setAuthor(text);
//                        break;
//                    case 4:
//                        top10.setNumber(text);
//                        break;
//                }
//                System.out.println(text);
//            }
//            resultList.add(top10);
//
//        }
//        result.put("top10", resultList);
//        return result;

  //  }
}
