# frozen_string_literal: true

require 'open-uri'

class ScrapeCrateAndBarrel < ApplicationJob
  queue_as :default

  def perform
    binding.pry
  end

  private

  def doc
    @doc ||= Nokogiri::HTML(html)
  end

  def categories
    doc.css('div.list-item-group')
  end

  def items
    categories.flat_map do |category|
      category_name = category.css('.list-item-group-titles').text.gsub(/[\d\(\)]/, '').strip
      category.css('.list-description-container').map do |container|
        build_item(container, category_name)
      end
    end
  end

  def build_item(container, _category)
    image_url = container.css('img').attribute('src').value
  end

  def html
    `curl 'https://www.crateandbarrel.com/gift-registry/eileen-mclaughlin-and-dan-schepers/r6049948'\
      -H 'authority: www.crateandbarrel.com'\
      -H 'pragma: no-cache'\
      -H 'cache-control: no-cache'\
      -H 'upgrade-insecure-requests: 1'\
      -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.87 Safari/537.36'\
      -H 'sec-fetch-user: ?1'\
      -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'\
      -H 'sec-fetch-site: none'\
      -H 'sec-fetch-mode: navigate'\
      -H 'accept-encoding: gzip, deflate, br'\
      -H 'accept-language: en-US,en;q=0.9'\
      -H 'cookie: Internationalization=US|USD; OriginCountry=US; tid=Lkb6M35EsAvZcl2SmzOL7Dg9I2aBYQNDVbifbQnlgSZFp335-zXsO0gCYstDGZmQLHHCoL_IW9ePl2GyMQLwpJhz6B0h8sDK5DdXlhA3f1Mpko81blZz7c6fPqIb7M572DClBw2; id=rrdsgxlcr3f30dhr1gvkzfip; uid=ZOCcCGjcn0GGFMHTyGSi-g; CBH_CRATEUS=zkfGwoLOg0i78yqCCwRwNA; optimizelyEndUserId=oeu1574127827150r0.7986939744660464; basketID=194104282; basketIDRemember=194104282; hasBasket=1; _sdsat_emailHash - digitalData=false; AMCVS_B9F81C8B5330A6F40A490D4D%40AdobeOrg=1; s_ecid=MCMID%7C06559525198459262530047741873887681213; ajs_user_id=null; ajs_group_id=null; ajs_anonymous_id=%22154d46e6-9128-4cfb-8698-13d038214b7e%22; _abck=81BD994E3687D884DD555BF21611D3EB~0~YAAQHdEwFwTMlHNuAQAAyoRUgQK+TzalK3iEFgGuxYrnKE/Wbad8NSXoMWn19iUwZZkf0BP/2Y2chAsVzbwdPFkPrDvUkZHGnyRXpZfNOZDeiwogw5Xbeab+P/Jhyugbfum4yEVGXMqG8/JyOzJBtLXNxHZzOCa7ZvTQ2JjhRITMCBsQq3QMzwWO0ZFMqYJHngd4DFsHYe+60c6PfnM1bdDORcIJktNnnpRSvYGgu8XguVwVHCTYu08zAPHt1j2XzJcReYIVXX4m93XUp/hkJlHAYM3cvQYvNHh3Or4hppZInJ2lpq6gAMoTTcIM+hHfntSfDHfsVAaC/cWlK4xn~-1~-1~-1; D_SID=67.167.206.98:hTjyEUvUAVYjTQb0mIzFb8Soej6LMcxHGQk7nOHFa98; btpdb.kbMzxFN.dGZjLjQ4OTM1NjQ=REFZUw; _gcl_au=1.1.43324428.1574127831; QuantumMetricUserID=957ccdcef31b3109c47f9d76d73c4787; QuantumMetricSessionID=2eb1b19f93b298547eda878445f3dc7d; _hjid=1c203d00-16c0-41d3-9bbd-32e935fa653d; __attentive_id=81d9ca65cd5b4e32ae23af01d4a00ef3; Experience=11_D|44_B; zip=60601; zipRemember=60601; mobileForOptIn=2; D_ZID=8388D686-94F7-3944-B799-F44F57ACD021; D_ZUID=DAEE6418-1E09-3AA3-9AE7-1AE73559067F; D_HID=0EBFCFFE-959A-3140-8742-716F72950EAE; _scid=145e6447-c71e-418e-a12b-6baa640b9264; _sctr=1|1575093600000; ffvisitorids={"crateandbarrel":"f42e887955e84dd1a47c34f5bb1ec2f4"}; D_IID=2F15880D-7072-33C3-B1F5-96DE737100DB; D_UID=37F4E3E4-CBF4-399A-B904-0E25992FA8B0; btpdb.kbMzxFN.YWZmaWxpYXRlIHNvdXJjZSBuYW1l=R29vZ2xlIElI; BrowseViewTracking=[{"Sku":142675,"FamilyId":0,"OptionChoiceParameter":""},{"Sku":240753,"FamilyId":0,"OptionChoiceParameter":""}]; AKA_A2=A; ak_bmsc=AEA9E114EE1EBEBEF50A003D70B779F6B81A5ACF04780000FD52E45D62313124~pl9850gs50ssk16YafZm+H36zlEeO9K+kW6yV0AIL+8I0i6cjYbE67j3Sv24a+LWEQoevrvSuNzG1r7bGobVDxjqrONXItHN+XAs8zrJToKmNkEotIypoZC5o8fPjZ4M7D+79wJrjnEikQzY4xWCPYSKeX+ZUECrmmyII5CR5VqsoslmrNLfmLfwxz7HWdSzMyqjG+zcerKVuLe658UQwAr1dJ/2sBHf8DIruIn/kAZyf4TZKqds/Gx9Ek043rqeil; bm_sz=56466C58EE840B3BF8659C58D5B3898E~YAAQz1oauKW1fZ1uAQAAtC3kwwXmlTnqN8pIYpKO4cDkSf06GLQq/toECAe1J1cNEEC26b+CgODo/PaXBh3Xl+PjPZSWlfPIU8MCM7AZ606cSbUtgLY335uCFuMS7XLjQnUyGpTRgCTqVTFANI1aydIgSx0LjxGmEHy2XuoA1acFLEXCIsjJ0NHtJ00ofUcQ8t8YWNF0tFo=; AMCV_B9F81C8B5330A6F40A490D4D%40AdobeOrg=1585540135%7CMCIDTS%7C18231%7CMCMID%7C06559525198459262530047741873887681213%7CMCAAMLH-1575849343%7C7%7CMCAAMB-1575849343%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1575251744s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C4.4.0; __attentive_ss_referrer="ORGANIC"; bm_sv=52644010617DCF6DCE9E02B49BCA7078~27NJK2we9ASCEBPjZbOUd7fYUXVsINCygY/63ic0vm+H21RHz+NE5Qt3Fn04y+5AgFbLL9KPLoOoxbolrWmQjqbMXapQK9sQY5xgExMWNjjVH/1lCxMMXWAxywzZBx1YPhf1FCjggSIHHdTnJsG//D1s9BkF13IsxblQAkDVzic=; s_sess=%20s_sq%3D%3B%20cmgvo%3DundefinedTyped%252FBookmarkedTyped%252FBookmarkedundefined%3B%20s_ppvl%3Dgr%25257Cgift%252520registry%252520-%252520give%252520a%252520gift%25253Awedding%25257Cshow%252520registry%252520list%252520page%252C8%252C15%252C1230%252C1280%252C231%252C1280%252C800%252C2%252CL%3B%20cpcbrate%3D0%3B%20s_cc%3Dtrue%3B%20s_ppv%3Dgr%25257Cgift%252520registry%252520-%252520give%252520a%252520gift%25253Awedding%25257Cshow%252520registry%252520list%252520page%252C9%252C9%252C722%252C1280%252C231%252C1280%252C800%252C2%252CL%3B; __attentive_pv=2; _derived_epik=dj0yJnU9SV93NUVNVEFyOXhxYjdLLW1oMnJFa3hTTExESkptYm8mbj1uWDNWU2w3YWpBT0p6ZmlVaDhCX0JBJm09NyZ0PUFBQUFBRjNrVXhz; s_pers=%20s_ev46%3D%255B%255B%2527Natural%252520Search%2527%252C%25271574127830195%2527%255D%252C%255B%2527Typed%252FBookmarked%2527%252C%25271575141233146%2527%255D%252C%255B%2527Natural%252520Search%2527%252C%25271575141728418%2527%255D%252C%255B%2527Typed%252FBookmarked%2527%252C%25271575244545910%2527%255D%255D%7C1733097345910%3B%20gpv%3Dgr%257Cgift%2520registry%2520-%2520give%2520a%2520gift%253Awedding%257Cshow%2520registry%2520list%2520page%7C1575248018612%3B%20s_vs%3D1%7C1575248018617%3B%20s_nr%3D1575246218621-Repeat%7C1606782218621%3B%20s_dl%3D1%7C1575248018624%3B; RT="z=1&dm=crateandbarrel.com&si=e1214168-0b18-4577-a1b3-92506755c3cf&ss=k3nnxdxr&sl=2&tt=b4o&bcn=%2F%2F173e252a.akstat.io%2F&ul=zzzi"' --compressed
    `
  end
end
