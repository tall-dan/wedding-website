if (window.location.hostname !== 'localhost') {
  (function (c, a) {
    if (!a.__SV) {
      let b = window; try { var d; let m; let j; const k = b.location; const f = k.hash; d = function (a, b) { return (m = a.match(RegExp(`${b}=([^&]*)`))) ? m[1] : null; }; f && d(f, 'state') && (j = JSON.parse(decodeURIComponent(d(f, 'state'))), j.action === 'mpeditor' && (b.sessionStorage.setItem('_mpcehash', f), history.replaceState(j.desiredHash || '', c.title, k.pathname + k.search))); } catch (n) {} let l; let h; window.mixpanel = a; a._i = []; a.init = function (b, d, g) {
        function c(b, i) {
          const a = i.split('.'); a.length == 2 && (b = b[a[0]], i = a[1]); b[i] = function () {
            b.push([i].concat(Array.prototype.slice.call(arguments,
              0)));
          };
        } let e = a; typeof g !== 'undefined' ? e = a[g] = [] : g = 'mixpanel'; e.people = e.people || []; e.toString = function (b) { let a = 'mixpanel'; g !== 'mixpanel' && (a += `.${g}`); b || (a += ' (stub)'); return a; }; e.people.toString = function () { return `${e.toString(1)}.people (stub)`; }; l = 'disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove'.split(' ');
        for (h = 0; h < l.length; h++)c(e, l[h]); const f = 'set set_once union unset remove delete'.split(' '); e.get_group = function () { function a(c) { b[c] = function () { call2_args = arguments; call2 = [c].concat(Array.prototype.slice.call(call2_args, 0)); e.push([d, call2]); }; } for (var b = {}, d = ['get_group'].concat(Array.prototype.slice.call(arguments, 0)), c = 0; c < f.length; c++)a(f[c]); return b; }; a._i.push([b, d, g]);
      }; a.__SV = 1.2; b = c.createElement('script'); b.type = 'text/javascript'; b.async = !0; b.src = typeof MIXPANEL_CUSTOM_LIB_URL !== 'undefined'
        ? MIXPANEL_CUSTOM_LIB_URL : c.location.protocol === 'file:' && '//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js'.match(/^\/\//) ? 'https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js' : '//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js'; d = c.getElementsByTagName('script')[0]; d.parentNode.insertBefore(b, d);
    }
  }(document, window.mixpanel || []));
  mixpanel.init('4fdc4e29078c311d1be71fa0799c554b');
} else {
  window.mixpanel = { track() {} };
}
