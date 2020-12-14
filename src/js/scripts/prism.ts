/* PrismJS 1.20.0
https://prismjs.com/download.html?#themes=prism-okaidia&languages=markup+css+clike+javascript+bash+json+markdown+scss+twig&plugins=line-numbers+normalize-whitespace */

const prismjs = {
  init() {
    const _self =
        'undefined' != typeof window
          ? window
          : 'undefined' != typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope
          ? self
          : {},
      Prism = (function (u) {
        var c = /\blang(?:uage)?-([\w-]+)\b/i,
          n = 0,
          C = {
            manual: u.Prism && u.Prism.manual,
            disableWorkerMessageHandler:
              u.Prism && u.Prism.disableWorkerMessageHandler,
            util: {
              encode: function e(n) {
                return n instanceof _
                  ? new _(n.type, e(n.content), n.alias)
                  : Array.isArray(n)
                  ? n.map(e)
                  : n
                      .replace(/&/g, '&amp;')
                      .replace(/</g, '&lt;')
                      .replace(/\u00a0/g, ' ');
              },
              type: function (e) {
                return Object.prototype.toString.call(e).slice(8, -1);
              },
              objId: function (e) {
                return (
                  e.__id || Object.defineProperty(e, '__id', { value: ++n }),
                  e.__id
                );
              },
              clone: function t(e, r) {
                let a,
                  n,
                  l = C.util.type(e);
                switch (((r = r || {}), l)) {
                  case 'Object':
                    if (((n = C.util.objId(e)), r[n])) return r[n];
                    for (const i in ((a = {}), (r[n] = a), e))
                      e.hasOwnProperty(i) && (a[i] = t(e[i], r));
                    return a;
                  case 'Array':
                    return (
                      (n = C.util.objId(e)),
                      r[n]
                        ? r[n]
                        : ((a = []),
                          (r[n] = a),
                          e.forEach(function (e, n) {
                            a[n] = t(e, r);
                          }),
                          a)
                    );
                  default:
                    return e;
                }
              },
              getLanguage: function (e) {
                for (; e && !c.test(e.className); ) e = e.parentElement;
                return e
                  ? (e.className.match(c) || [, 'none'])[1].toLowerCase()
                  : 'none';
              },
              currentScript: function () {
                if ('undefined' == typeof document) return null;
                if ('currentScript' in document) return document.currentScript;
                try {
                  throw new Error();
                } catch (e) {
                  const n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) ||
                    [])[1];
                  if (n) {
                    const t = document.getElementsByTagName('script');
                    for (const r in t) if (t[r].src == n) return t[r];
                  }
                  return null;
                }
              },
            },
            languages: {
              extend: function (e, n) {
                const t = C.util.clone(C.languages[e]);
                for (const r in n) t[r] = n[r];
                return t;
              },
              insertBefore: function (t, e, n, r) {
                const a = (r = r || C.languages)[t],
                  l = {};
                for (const i in a)
                  if (a.hasOwnProperty(i)) {
                    if (i == e)
                      for (const o in n) n.hasOwnProperty(o) && (l[o] = n[o]);
                    n.hasOwnProperty(i) || (l[i] = a[i]);
                  }
                const s = r[t];
                return (
                  (r[t] = l),
                  C.languages.DFS(C.languages, function (e, n) {
                    n === s && e != t && (this[e] = l);
                  }),
                  l
                );
              },
              DFS: function e(n, t, r, a) {
                a = a || {};
                const l = C.util.objId;
                for (const i in n)
                  if (n.hasOwnProperty(i)) {
                    t.call(n, i, n[i], r || i);
                    const o = n[i],
                      s = C.util.type(o);
                    'Object' !== s || a[l(o)]
                      ? 'Array' !== s ||
                        a[l(o)] ||
                        ((a[l(o)] = !0), e(o, t, i, a))
                      : ((a[l(o)] = !0), e(o, t, null, a));
                  }
              },
            },
            plugins: {},
            highlightAll: function (e, n) {
              C.highlightAllUnder(document, e, n);
            },
            highlightAllUnder: function (e, n, t) {
              const r = {
                callback: t,
                container: e,
                selector:
                  'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
              };
              C.hooks.run('before-highlightall', r),
                (r.elements = Array.prototype.slice.apply(
                  r.container.querySelectorAll(r.selector),
                )),
                C.hooks.run('before-all-elements-highlight', r);
              for (var a, l = 0; (a = r.elements[l++]); )
                C.highlightElement(a, !0 === n, r.callback);
            },
            highlightElement: function (e, n, t) {
              const r = C.util.getLanguage(e),
                a = C.languages[r];
              e.className =
                e.className.replace(c, '').replace(/\s+/g, ' ') +
                ' language-' +
                r;
              const l = e.parentNode;
              l &&
                'pre' === l.nodeName.toLowerCase() &&
                (l.className =
                  l.className.replace(c, '').replace(/\s+/g, ' ') +
                  ' language-' +
                  r);
              const i = {
                element: e,
                language: r,
                grammar: a,
                code: e.textContent,
              };

              function o(e) {
                (i.highlightedCode = e),
                  C.hooks.run('before-insert', i),
                  (i.element.innerHTML = i.highlightedCode),
                  C.hooks.run('after-highlight', i),
                  C.hooks.run('complete', i),
                  t && t.call(i.element);
              }

              if ((C.hooks.run('before-sanity-check', i), !i.code))
                return (
                  C.hooks.run('complete', i), void (t && t.call(i.element))
                );
              if ((C.hooks.run('before-highlight', i), i.grammar))
                if (n && u.Worker) {
                  const s = new Worker(C.filename);
                  (s.onmessage = function (e) {
                    o(e.data);
                  }),
                    s.postMessage(
                      JSON.stringify({
                        language: i.language,
                        code: i.code,
                        immediateClose: !0,
                      }),
                    );
                } else o(C.highlight(i.code, i.grammar, i.language));
              else o(C.util.encode(i.code));
            },
            highlight: function (e, n, t) {
              const r = { code: e, grammar: n, language: t };
              return (
                C.hooks.run('before-tokenize', r),
                (r.tokens = C.tokenize(r.code, r.grammar)),
                C.hooks.run('after-tokenize', r),
                _.stringify(C.util.encode(r.tokens), r.language)
              );
            },
            tokenize: function (e, n) {
              const t = n.rest;
              if (t) {
                for (const r in t) n[r] = t[r];
                delete n.rest;
              }
              const a = new l();
              return (
                M(a, a.head, e),
                (function e(n, t, r, a, l, i, o) {
                  for (const s in r)
                    if (r.hasOwnProperty(s) && r[s]) {
                      let u = r[s];
                      u = Array.isArray(u) ? u : [u];
                      for (let c = 0; c < u.length; ++c) {
                        if (o && o == s + ',' + c) return;
                        let g = u[c],
                          f = g.inside,
                          h = !!g.lookbehind,
                          d = !!g.greedy,
                          v = 0,
                          p = g.alias;
                        if (d && !g.pattern.global) {
                          const m = g.pattern.toString().match(/[imsuy]*$/)[0];
                          g.pattern = RegExp(g.pattern.source, m + 'g');
                        }
                        g = g.pattern || g;
                        for (
                          let y = a.next, k = l;
                          y !== t.tail;
                          k += y.value.length, y = y.next
                        ) {
                          let b = y.value;
                          if (t.length > n.length) return;
                          if (!(b instanceof _)) {
                            let x = 1;
                            if (d && y != t.tail.prev) {
                              g.lastIndex = k;
                              var w = g.exec(n);
                              if (!w) break;
                              var A = w.index + (h && w[1] ? w[1].length : 0),
                                P = w.index + w[0].length,
                                S = k;
                              for (S += y.value.length; S <= A; )
                                (y = y.next), (S += y.value.length);
                              if (
                                ((S -= y.value.length),
                                (k = S),
                                y.value instanceof _)
                              )
                                continue;
                              for (
                                let O = y;
                                O !== t.tail &&
                                (S < P ||
                                  ('string' == typeof O.value &&
                                    !O.prev.value.greedy));
                                O = O.next
                              )
                                x++, (S += O.value.length);
                              x--, (b = n.slice(k, S)), (w.index -= k);
                            } else {
                              g.lastIndex = 0;
                              var w = g.exec(b);
                            }
                            if (w) {
                              h && (v = w[1] ? w[1].length : 0);
                              var A = w.index + v,
                                w = w[0].slice(v),
                                P = A + w.length,
                                E = b.slice(0, A),
                                N = b.slice(P),
                                j = y.prev;
                              E && ((j = M(t, j, E)), (k += E.length)),
                                W(t, j, x);
                              const L = new _(
                                s,
                                f ? C.tokenize(w, f) : w,
                                p,
                                w,
                                d,
                              );
                              if (
                                ((y = M(t, j, L)),
                                N && M(t, y, N),
                                1 < x && e(n, t, r, y.prev, k, !0, s + ',' + c),
                                i)
                              )
                                break;
                            } else if (i) break;
                          }
                        }
                      }
                    }
                })(e, a, n, a.head, 0),
                (function (e) {
                  let n = [],
                    t = e.head.next;
                  for (; t !== e.tail; ) n.push(t.value), (t = t.next);
                  return n;
                })(a)
              );
            },
            hooks: {
              all: {},
              add: function (e, n) {
                const t = C.hooks.all;
                (t[e] = t[e] || []), t[e].push(n);
              },
              run: function (e, n) {
                const t = C.hooks.all[e];
                if (t && t.length) for (var r, a = 0; (r = t[a++]); ) r(n);
              },
            },
            Token: _,
          };

        function _(e, n, t, r, a) {
          (this.type = e),
            (this.content = n),
            (this.alias = t),
            (this.length = 0 | (r || '').length),
            (this.greedy = !!a);
        }

        function l() {
          const e = { value: null, prev: null, next: null },
            n = { value: null, prev: e, next: null };
          (e.next = n), (this.head = e), (this.tail = n), (this.length = 0);
        }

        function M(e, n, t) {
          const r = n.next,
            a = { value: t, prev: n, next: r };
          return (n.next = a), (r.prev = a), e.length++, a;
        }

        function W(e, n, t) {
          for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
          ((n.next = r).prev = n), (e.length -= a);
        }

        if (
          ((u.Prism = C),
          (_.stringify = function n(e, t) {
            if ('string' == typeof e) return e;
            if (Array.isArray(e)) {
              let r = '';
              return (
                e.forEach(function (e) {
                  r += n(e, t);
                }),
                r
              );
            }
            const a = {
                type: e.type,
                content: n(e.content, t),
                tag: 'span',
                classes: ['token', e.type],
                attributes: {},
                language: t,
              },
              l = e.alias;
            l &&
              (Array.isArray(l)
                ? Array.prototype.push.apply(a.classes, l)
                : a.classes.push(l)),
              C.hooks.run('wrap', a);
            let i = '';
            for (const o in a.attributes)
              i +=
                ' ' +
                o +
                '="' +
                (a.attributes[o] || '').replace(/"/g, '&quot;') +
                '"';
            return (
              '<' +
              a.tag +
              ' class="' +
              a.classes.join(' ') +
              '"' +
              i +
              '>' +
              a.content +
              '</' +
              a.tag +
              '>'
            );
          }),
          !u.document)
        )
          return (
            u.addEventListener &&
              (C.disableWorkerMessageHandler ||
                u.addEventListener(
                  'message',
                  function (e) {
                    const n = JSON.parse(e.data),
                      t = n.language,
                      r = n.code,
                      a = n.immediateClose;
                    u.postMessage(C.highlight(r, C.languages[t], t)),
                      a && u.close();
                  },
                  !1,
                )),
            C
          );
        const e = C.util.currentScript();

        function t() {
          C.manual || C.highlightAll();
        }

        if (
          (e &&
            ((C.filename = e.src),
            e.hasAttribute('data-manual') && (C.manual = !0)),
          !C.manual)
        ) {
          const r = document.readyState;
          'loading' === r || ('interactive' === r && e && e.defer)
            ? document.addEventListener('DOMContentLoaded', t)
            : window.requestAnimationFrame
            ? window.requestAnimationFrame(t)
            : window.setTimeout(t, 16);
        }
        return C;
      })(_self);
    'undefined' != typeof module && module.exports && (module.exports = Prism),
      'undefined' != typeof global && (global.Prism = Prism);
    (Prism.languages.markup = {
      comment: /<!--[\s\S]*?-->/,
      prolog: /<\?[\s\S]+?\?>/,
      doctype: {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
      },
      cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
      tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
          },
          'attr-value': {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [
                /^=/,
                { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
              ],
            },
          },
          punctuation: /\/?>/,
          'attr-name': {
            pattern: /[^\s>\/]+/,
            inside: { namespace: /^[^\s>\/:]+:/ },
          },
        },
      },
      entity: /&#?[\da-z]{1,8};/i,
    }),
      (Prism.languages.markup.tag.inside['attr-value'].inside.entity =
        Prism.languages.markup.entity),
      Prism.hooks.add('wrap', function (a) {
        'entity' === a.type &&
          (a.attributes.title = a.content.replace(/&amp;/, '&'));
      }),
      Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
        value: function (a, e) {
          const s = {};
          (s['language-' + e] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: Prism.languages[e],
          }),
            (s.cdata = /^<!\[CDATA\[|\]\]>$/i);
          const n = {
            'included-cdata': {
              pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
              inside: s,
            },
          };
          n['language-' + e] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[e],
          };
          const t = {};
          (t[a] = {
            pattern: RegExp(
              '(<__[^]*?>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)'.replace(
                /__/g,
                function () {
                  return a;
                },
              ),
              'i',
            ),
            lookbehind: !0,
            greedy: !0,
            inside: n,
          }),
            Prism.languages.insertBefore('markup', 'cdata', t);
        },
      }),
      (Prism.languages.html = Prism.languages.markup),
      (Prism.languages.mathml = Prism.languages.markup),
      (Prism.languages.svg = Prism.languages.markup),
      (Prism.languages.xml = Prism.languages.extend('markup', {})),
      (Prism.languages.ssml = Prism.languages.xml);
    !(function (s) {
      const e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
      (s.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
          inside: {
            rule: /^@[\w-]+/,
            'selector-function-argument': {
              pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
              lookbehind: !0,
              alias: 'selector',
            },
          },
        },
        url: {
          pattern: RegExp('url\\((?:' + e.source + '|[^\n\r()]*)\\)', 'i'),
          greedy: !0,
          inside: { function: /^url/i, punctuation: /^\(|\)$/ },
        },
        selector: RegExp('[^{}\\s](?:[^{};"\']|' + e.source + ')*?(?=\\s*\\{)'),
        string: { pattern: e, greedy: !0 },
        property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        important: /!important\b/i,
        function: /[-a-z0-9]+(?=\()/i,
        punctuation: /[(){};:,]/,
      }),
        (s.languages.css.atrule.inside.rest = s.languages.css);
      const t = s.languages.markup;
      t &&
        (t.tag.addInlined('style', 'css'),
        s.languages.insertBefore(
          'inside',
          'attr-value',
          {
            'style-attr': {
              pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
              inside: {
                'attr-name': { pattern: /^\s*style/i, inside: t.tag.inside },
                punctuation: /^\s*=\s*['"]|['"]\s*$/,
                'attr-value': { pattern: /.+/i, inside: s.languages.css },
              },
              alias: 'language-css',
            },
          },
          t.tag,
        ));
    })(Prism);
    Prism.languages.clike = {
      comment: [
        { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
        { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
      ],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0,
      },
      'class-name': {
        pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: { punctuation: /[.\\]/ },
      },
      keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
      boolean: /\b(?:true|false)\b/,
      function: /\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/,
    };
    (Prism.languages.javascript = Prism.languages.extend('clike', {
      'class-name': [
        Prism.languages.clike['class-name'],
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
          lookbehind: !0,
        },
      ],
      keyword: [
        { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
        {
          pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: !0,
        },
      ],
      number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
      function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      operator: /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/,
    })),
      (Prism.languages.javascript[
        'class-name'
      ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
      Prism.languages.insertBefore('javascript', 'keyword', {
        regex: {
          pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
          lookbehind: !0,
          greedy: !0,
        },
        'function-variable': {
          pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
          alias: 'function',
        },
        parameter: [
          {
            pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
            lookbehind: !0,
            inside: Prism.languages.javascript,
          },
          {
            pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
            inside: Prism.languages.javascript,
          },
          {
            pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: Prism.languages.javascript,
          },
          {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: Prism.languages.javascript,
          },
        ],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
      }),
      Prism.languages.insertBefore('javascript', 'string', {
        'template-string': {
          pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
          greedy: !0,
          inside: {
            'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
            interpolation: {
              pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
              lookbehind: !0,
              inside: {
                'interpolation-punctuation': {
                  pattern: /^\${|}$/,
                  alias: 'punctuation',
                },
                rest: Prism.languages.javascript,
              },
            },
            string: /[\s\S]+/,
          },
        },
      }),
      Prism.languages.markup &&
        Prism.languages.markup.tag.addInlined('script', 'javascript'),
      (Prism.languages.js = Prism.languages.javascript);
    !(function (e) {
      const t =
          '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
        n = {
          environment: { pattern: RegExp('\\$' + t), alias: 'constant' },
          variable: [
            {
              pattern: /\$?\(\([\s\S]+?\)\)/,
              greedy: !0,
              inside: {
                variable: [
                  { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                  /^\$\(\(/,
                ],
                number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
                operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                punctuation: /\(\(?|\)\)?|,|;/,
              },
            },
            {
              pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
              greedy: !0,
              inside: { variable: /^\$\(|^`|\)$|`$/ },
            },
            {
              pattern: /\$\{[^}]+\}/,
              greedy: !0,
              inside: {
                operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                punctuation: /[\[\]]/,
                environment: {
                  pattern: RegExp('(\\{)' + t),
                  lookbehind: !0,
                  alias: 'constant',
                },
              },
            },
            /\$(?:\w+|[#?*!@$])/,
          ],
          entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/,
        };
      e.languages.bash = {
        shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
        comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
        'function-name': [
          {
            pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
            lookbehind: !0,
            alias: 'function',
          },
          { pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/, alias: 'function' },
        ],
        'for-or-select': {
          pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
          alias: 'variable',
          lookbehind: !0,
        },
        'assign-left': {
          pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
          inside: {
            environment: {
              pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + t),
              lookbehind: !0,
              alias: 'constant',
            },
          },
          alias: 'variable',
          lookbehind: !0,
        },
        string: [
          {
            pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\2/,
            lookbehind: !0,
            greedy: !0,
            inside: n,
          },
          {
            pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\3/,
            lookbehind: !0,
            greedy: !0,
          },
          {
            pattern: /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\2)[^\\])*\2/,
            lookbehind: !0,
            greedy: !0,
            inside: n,
          },
        ],
        environment: { pattern: RegExp('\\$?' + t), alias: 'constant' },
        variable: n.variable,
        function: {
          pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
          lookbehind: !0,
        },
        keyword: {
          pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
          lookbehind: !0,
        },
        builtin: {
          pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
          lookbehind: !0,
          alias: 'class-name',
        },
        boolean: {
          pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
          lookbehind: !0,
        },
        'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
        operator: {
          pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
          inside: { 'file-descriptor': { pattern: /^\d/, alias: 'important' } },
        },
        punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
        number: {
          pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
          lookbehind: !0,
        },
      };
      for (
        let a = [
            'comment',
            'function-name',
            'for-or-select',
            'assign-left',
            'string',
            'environment',
            'function',
            'keyword',
            'builtin',
            'boolean',
            'file-descriptor',
            'operator',
            'punctuation',
            'number',
          ],
          r = n.variable[1].inside,
          s = 0;
        s < a.length;
        s++
      )
        r[a[s]] = e.languages.bash[a[s]];
      e.languages.shell = e.languages.bash;
    })(Prism);
    Prism.languages.json = {
      property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 },
      string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
      comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
      number: /-?\d+\.?\d*(?:e[+-]?\d+)?/i,
      punctuation: /[{}[\],]/,
      operator: /:/,
      boolean: /\b(?:true|false)\b/,
      null: { pattern: /\bnull\b/, alias: 'keyword' },
    };
    !(function (d) {
      function n(n, e) {
        return (
          (n = n.replace(/<inner>/g, function () {
            return '(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))';
          })),
          e && (n = n + '|' + n.replace(/_/g, '\\*')),
          RegExp('((?:^|[^\\\\])(?:\\\\{2})*)(?:' + n + ')')
        );
      }

      const e = '(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+',
        t = '\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|$)'.replace(
          /__/g,
          function () {
            return e;
          },
        ),
        a =
          '\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\n|\r\n?)';
      (d.languages.markdown = d.languages.extend('markup', {})),
        d.languages.insertBefore('markdown', 'prolog', {
          blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
          table: {
            pattern: RegExp('^' + t + a + '(?:' + t + ')*', 'm'),
            inside: {
              'table-data-rows': {
                pattern: RegExp('^(' + t + a + ')(?:' + t + ')*$'),
                lookbehind: !0,
                inside: {
                  'table-data': {
                    pattern: RegExp(e),
                    inside: d.languages.markdown,
                  },
                  punctuation: /\|/,
                },
              },
              'table-line': {
                pattern: RegExp('^(' + t + ')' + a + '$'),
                lookbehind: !0,
                inside: { punctuation: /\||:?-{3,}:?/ },
              },
              'table-header-row': {
                pattern: RegExp('^' + t + '$'),
                inside: {
                  'table-header': {
                    pattern: RegExp(e),
                    alias: 'important',
                    inside: d.languages.markdown,
                  },
                  punctuation: /\|/,
                },
              },
            },
          },
          code: [
            {
              pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
              lookbehind: !0,
              alias: 'keyword',
            },
            { pattern: /``.+?``|`[^`\r\n]+`/, alias: 'keyword' },
            {
              pattern: /^```[\s\S]*?^```$/m,
              greedy: !0,
              inside: {
                'code-block': {
                  pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                  lookbehind: !0,
                },
                'code-language': { pattern: /^(```).+/, lookbehind: !0 },
                punctuation: /```/,
              },
            },
          ],
          title: [
            {
              pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
              alias: 'important',
              inside: { punctuation: /==+$|--+$/ },
            },
            {
              pattern: /(^\s*)#+.+/m,
              lookbehind: !0,
              alias: 'important',
              inside: { punctuation: /^#+|#+$/ },
            },
          ],
          hr: {
            pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
            lookbehind: !0,
            alias: 'punctuation',
          },
          list: {
            pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
            lookbehind: !0,
            alias: 'punctuation',
          },
          'url-reference': {
            pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
            inside: {
              variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
              string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
              punctuation: /^[\[\]!:]|[<>]/,
            },
            alias: 'url',
          },
          bold: {
            pattern: n('__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__', !0),
            lookbehind: !0,
            greedy: !0,
            inside: {
              content: {
                pattern: /(^..)[\s\S]+(?=..$)/,
                lookbehind: !0,
                inside: {},
              },
              punctuation: /\*\*|__/,
            },
          },
          italic: {
            pattern: n('_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_', !0),
            lookbehind: !0,
            greedy: !0,
            inside: {
              content: {
                pattern: /(^.)[\s\S]+(?=.$)/,
                lookbehind: !0,
                inside: {},
              },
              punctuation: /[*_]/,
            },
          },
          strike: {
            pattern: n('(~~?)(?:(?!~)<inner>)+?\\2', !1),
            lookbehind: !0,
            greedy: !0,
            inside: {
              content: {
                pattern: /(^~~?)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: {},
              },
              punctuation: /~~?/,
            },
          },
          url: {
            pattern: n(
              '!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)| ?\\[(?:(?!\\])<inner>)+\\])',
              !1,
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
              variable: { pattern: /(\[)[^\]]+(?=\]$)/, lookbehind: !0 },
              content: {
                pattern: /(^!?\[)[^\]]+(?=\])/,
                lookbehind: !0,
                inside: {},
              },
              string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ },
            },
          },
        }),
        ['url', 'bold', 'italic', 'strike'].forEach(function (e) {
          ['url', 'bold', 'italic', 'strike'].forEach(function (n) {
            e !== n &&
              (d.languages.markdown[e].inside.content.inside[n] =
                d.languages.markdown[n]);
          });
        }),
        d.hooks.add('after-tokenize', function (n) {
          ('markdown' !== n.language && 'md' !== n.language) ||
            !(function n(e) {
              if (e && 'string' != typeof e)
                for (let t = 0, a = e.length; t < a; t++) {
                  const i = e[t];
                  if ('code' === i.type) {
                    const r = i.content[1],
                      o = i.content[3];
                    if (
                      r &&
                      o &&
                      'code-language' === r.type &&
                      'code-block' === o.type &&
                      'string' == typeof r.content
                    ) {
                      let l = r.content
                          .replace(/\b#/g, 'sharp')
                          .replace(/\b\+\+/g, 'pp'),
                        s =
                          'language-' +
                          (l = (/[a-z][\w-]*/i.exec(l) || [
                            '',
                          ])[0].toLowerCase());
                      o.alias
                        ? 'string' == typeof o.alias
                          ? (o.alias = [o.alias, s])
                          : o.alias.push(s)
                        : (o.alias = [s]);
                    }
                  } else n(i.content);
                }
            })(n.tokens);
        }),
        d.hooks.add('wrap', function (n) {
          if ('code-block' === n.type) {
            for (var e = '', t = 0, a = n.classes.length; t < a; t++) {
              const i = n.classes[t],
                r = /language-(.+)/.exec(i);
              if (r) {
                e = r[1];
                break;
              }
            }
            const o = d.languages[e];
            if (o) {
              const l = n.content.replace(/&lt;/g, '<').replace(/&amp;/g, '&');
              n.content = d.highlight(l, o, e);
            } else if (e && 'none' !== e && d.plugins.autoloader) {
              const s =
                'md-' +
                new Date().valueOf() +
                '-' +
                Math.floor(1e16 * Math.random());
              (n.attributes.id = s),
                d.plugins.autoloader.loadLanguages(e, function () {
                  const n = document.getElementById(s);
                  n &&
                    (n.innerHTML = d.highlight(
                      n.textContent,
                      d.languages[e],
                      e,
                    ));
                });
            }
          }
        }),
        (d.languages.md = d.languages.markdown);
    })(Prism);
    (Prism.languages.scss = Prism.languages.extend('css', {
      comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: !0,
      },
      atrule: {
        pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
        inside: { rule: /@[\w-]+/ },
      },
      url: /(?:[-a-z]+-)?url(?=\()/i,
      selector: {
        pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
        inside: {
          parent: { pattern: /&/, alias: 'important' },
          placeholder: /%[-\w]+/,
          variable: /\$[-\w]+|#\{\$[-\w]+\}/,
        },
      },
      property: {
        pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
        inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
      },
    })),
      Prism.languages.insertBefore('scss', 'atrule', {
        keyword: [
          /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
          { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 },
        ],
      }),
      Prism.languages.insertBefore('scss', 'important', {
        variable: /\$[-\w]+|#\{\$[-\w]+\}/,
      }),
      Prism.languages.insertBefore('scss', 'function', {
        placeholder: { pattern: /%[-\w]+/, alias: 'selector' },
        statement: { pattern: /\B!(?:default|optional)\b/i, alias: 'keyword' },
        boolean: /\b(?:true|false)\b/,
        null: { pattern: /\bnull\b/, alias: 'keyword' },
        operator: {
          pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
          lookbehind: !0,
        },
      }),
      (Prism.languages.scss.atrule.inside.rest = Prism.languages.scss);
    Prism.languages.twig = {
      comment: /\{#[\s\S]*?#\}/,
      tag: {
        pattern: /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/,
        inside: {
          ld: {
            pattern: /^(?:\{\{-?|\{%-?\s*\w+)/,
            inside: { punctuation: /^(?:\{\{|\{%)-?/, keyword: /\w+/ },
          },
          rd: { pattern: /-?(?:%\}|\}\})$/, inside: { punctuation: /.+/ } },
          string: {
            pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
            inside: { punctuation: /^['"]|['"]$/ },
          },
          keyword: /\b(?:even|if|odd)\b/,
          boolean: /\b(?:true|false|null)\b/,
          number: /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,
          operator: [
            {
              pattern: /(\s)(?:and|b-and|b-xor|b-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
              lookbehind: !0,
            },
            /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/,
          ],
          property: /\b[a-zA-Z_]\w*\b/,
          punctuation: /[()\[\]{}:.,]/,
        },
      },
      other: { pattern: /\S(?:[\s\S]*\S)?/, inside: Prism.languages.markup },
    };
    !(function () {
      if ('undefined' != typeof self && self.Prism && self.document) {
        var l = 'line-numbers',
          c = /\n(?!$)/g,
          m = function (e) {
            const t = a(e)['white-space'];
            if ('pre-wrap' === t || 'pre-line' === t) {
              const n = e.querySelector('code'),
                r = e.querySelector('.line-numbers-rows');
              if (!n || !r) return;
              let s = e.querySelector('.line-numbers-sizer'),
                i = n.textContent.split(c);
              s ||
                (((s = document.createElement('span')).className =
                  'line-numbers-sizer'),
                n.appendChild(s)),
                (s.style.display = 'block'),
                i.forEach(function (e, t) {
                  s.textContent = e || '\n';
                  const n = s.getBoundingClientRect().height;
                  r.children[t].style.height = n + 'px';
                }),
                (s.textContent = ''),
                (s.style.display = 'none');
            }
          },
          a = function (e) {
            return e
              ? window.getComputedStyle
                ? getComputedStyle(e)
                : e.currentStyle || null
              : null;
          };
        window.addEventListener('resize', function () {
          Array.prototype.forEach.call(
            document.querySelectorAll('pre.' + l),
            m,
          );
        }),
          Prism.hooks.add('complete', function (e) {
            if (e.code) {
              const t = e.element,
                n = t.parentNode;
              if (
                n &&
                /pre/i.test(n.nodeName) &&
                !t.querySelector('.line-numbers-rows')
              ) {
                for (
                  var r = !1, s = /(?:^|\s)line-numbers(?:\s|$)/, i = t;
                  i;
                  i = i.parentNode
                )
                  if (s.test(i.className)) {
                    r = !0;
                    break;
                  }
                if (r) {
                  (t.className = t.className.replace(s, ' ')),
                    s.test(n.className) || (n.className += ' line-numbers');
                  let l,
                    a = e.code.match(c),
                    o = a ? a.length + 1 : 1,
                    u = new Array(o + 1).join('<span></span>');
                  (l = document.createElement('span')).setAttribute(
                    'aria-hidden',
                    'true',
                  ),
                    (l.className = 'line-numbers-rows'),
                    (l.innerHTML = u),
                    n.hasAttribute('data-start') &&
                      (n.style.counterReset =
                        'linenumber ' +
                        (parseInt(n.getAttribute('data-start'), 10) - 1)),
                    e.element.appendChild(l),
                    m(n),
                    Prism.hooks.run('line-numbers', e);
                }
              }
            }
          }),
          Prism.hooks.add('line-numbers', function (e) {
            (e.plugins = e.plugins || {}), (e.plugins.lineNumbers = !0);
          }),
          (Prism.plugins.lineNumbers = {
            getLine: function (e, t) {
              if ('PRE' === e.tagName && e.classList.contains(l)) {
                const n = e.querySelector('.line-numbers-rows'),
                  r = parseInt(e.getAttribute('data-start'), 10) || 1,
                  s = r + (n.children.length - 1);
                t < r && (t = r), s < t && (t = s);
                const i = t - r;
                return n.children[i];
              }
            },
            resize: function (e) {
              m(e);
            },
          });
      }
    })();
    !(function () {
      const i =
        Object.assign ||
        function (e, n) {
          for (const t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
          return e;
        };

      function e(e) {
        this.defaults = i({}, e);
      }

      function l(e) {
        for (var n = 0, t = 0; t < e.length; ++t)
          e.charCodeAt(t) == '\t'.charCodeAt(0) && (n += 3);
        return e.length + n;
      }

      (e.prototype = {
        setDefaults: function (e) {
          this.defaults = i(this.defaults, e);
        },
        normalize: function (e, n) {
          for (const t in (n = i(this.defaults, n))) {
            const r = t.replace(/-(\w)/g, function (e, n) {
              return n.toUpperCase();
            });
            'normalize' !== t &&
              'setDefaults' !== r &&
              n[t] &&
              this[r] &&
              (e = this[r].call(this, e, n[t]));
          }
          return e;
        },
        leftTrim: function (e) {
          return e.replace(/^\s+/, '');
        },
        rightTrim: function (e) {
          return e.replace(/\s+$/, '');
        },
        tabsToSpaces: function (e, n) {
          return (n = 0 | n || 4), e.replace(/\t/g, new Array(++n).join(' '));
        },
        spacesToTabs: function (e, n) {
          return (n = 0 | n || 4), e.replace(RegExp(' {' + n + '}', 'g'), '\t');
        },
        removeTrailing: function (e) {
          return e.replace(/\s*?$/gm, '');
        },
        removeInitialLineFeed: function (e) {
          return e.replace(/^(?:\r?\n|\r)/, '');
        },
        removeIndent: function (e) {
          const n = e.match(/^[^\S\n\r]*(?=\S)/gm);
          return n && n[0].length
            ? (n.sort(function (e, n) {
                return e.length - n.length;
              }),
              n[0].length ? e.replace(RegExp('^' + n[0], 'gm'), '') : e)
            : e;
        },
        indent: function (e, n) {
          return e.replace(
            /^[^\S\n\r]*(?=\S)/gm,
            new Array(++n).join('\t') + '$&',
          );
        },
        breakLines: function (e, n) {
          n = !0 === n ? 80 : 0 | n || 80;
          for (var t = e.split('\n'), r = 0; r < t.length; ++r)
            if (!(l(t[r]) <= n)) {
              for (
                var i = t[r].split(/(\s+)/g), o = 0, a = 0;
                a < i.length;
                ++a
              ) {
                const s = l(i[a]);
                n < (o += s) && ((i[a] = '\n' + i[a]), (o = s));
              }
              t[r] = i.join('');
            }
          return t.join('\n');
        },
      }),
        'undefined' != typeof module && module.exports && (module.exports = e),
        'undefined' != typeof Prism &&
          ((Prism.plugins.NormalizeWhitespace = new e({
            'remove-trailing': !0,
            'remove-indent': !0,
            'left-trim': !0,
            'right-trim': !0,
          })),
          Prism.hooks.add('before-sanity-check', function (e) {
            const n = Prism.plugins.NormalizeWhitespace;
            if (!e.settings || !1 !== e.settings['whitespace-normalization'])
              if ((e.element && e.element.parentNode) || !e.code) {
                const t = e.element.parentNode,
                  r = /(?:^|\s)no-whitespace-normalization(?:\s|$)/;
                if (
                  e.code &&
                  t &&
                  'pre' === t.nodeName.toLowerCase() &&
                  !r.test(t.className) &&
                  !r.test(e.element.className)
                ) {
                  for (
                    var i = t.childNodes, o = '', a = '', s = !1, l = 0;
                    l < i.length;
                    ++l
                  ) {
                    const c = i[l];
                    c == e.element
                      ? (s = !0)
                      : '#text' === c.nodeName &&
                        (s ? (a += c.nodeValue) : (o += c.nodeValue),
                        t.removeChild(c),
                        --l);
                  }
                  if (e.element.children.length && Prism.plugins.KeepMarkup) {
                    const u = o + e.element.innerHTML + a;
                    (e.element.innerHTML = n.normalize(u, e.settings)),
                      (e.code = e.element.textContent);
                  } else
                    (e.code = o + e.code + a),
                      (e.code = n.normalize(e.code, e.settings));
                }
              } else e.code = n.normalize(e.code, e.settings);
          }));
    })();
  },
};

export default prismjs;
