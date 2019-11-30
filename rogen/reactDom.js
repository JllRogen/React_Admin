


function legacyCreateRootFromDOMContainer(
    container: DOMContainer,
    forceHydrate: boolean,
): _ReactRoot {
    const shouldHydrate =
        forceHydrate || shouldHydrateDueToLegacyHeuristic(container);
    // First clear any existing content.
    if (!shouldHydrate) {
        let warned = false;
        let rootSibling;
        while ((rootSibling = container.lastChild)) {
            if (__DEV__) {
                if (
                    !warned &&
                    rootSibling.nodeType === ELEMENT_NODE &&
                    (rootSibling: any).hasAttribute(ROOT_ATTRIBUTE_NAME)
        ) {
                    warned = true;
                    warningWithoutStack(
                        false,
                        'render(): Target node has markup rendered by React, but there ' +
                        'are unrelated nodes as well. This is most commonly caused by ' +
                        'white-space inserted around server-rendered markup.',
                    );
                }
            }
            container.removeChild(rootSibling);
        }
    }
    if (__DEV__) {
        if (shouldHydrate && !forceHydrate && !warnedAboutHydrateAPI) {
            warnedAboutHydrateAPI = true;
            lowPriorityWarningWithoutStack(
                false,
                'render(): Calling ReactDOM.render() to hydrate server-rendered markup ' +
                'will stop working in React v17. Replace the ReactDOM.render() call ' +
                'with ReactDOM.hydrate() if you want React to attach to the server HTML.',
            );
        }
    }

    // Legacy roots are not batched.
    return new ReactBlockingRoot(
        container,
        LegacyRoot,
        shouldHydrate
            ? {
                hydrate: true,
            }
            : undefined,
    );
}





function legacyRenderSubtreeIntoContainer(
    parentComponent: ?React$Component<any, any>,
    children: ReactNodeList,
    container: DOMContainer,
    forceHydrate: boolean,
    callback: ?Function,
) {
    if (__DEV__) {
        topLevelUpdateWarnings(container);
        warnOnInvalidCallback(callback === undefined ? null : callback, 'render');
    }

    // TODO: Without `any` type, Flow says "Property cannot be accessed on any
    // member of intersection type." Whyyyyyy.
    let root: _ReactRoot = (container._reactRootContainer: any);
    let fiberRoot;
    if (!root) {
        // Initial mount
        root = container._reactRootContainer = legacyCreateRootFromDOMContainer(
            container,
            forceHydrate,
        );
        fiberRoot = root._internalRoot;
        if (typeof callback === 'function') {
            const originalCallback = callback;
            callback = function () {
                const instance = getPublicRootInstance(fiberRoot);
                originalCallback.call(instance);
            };
        }
        // Initial mount should not be batched.
        unbatchedUpdates(() => {
            updateContainer(children, fiberRoot, parentComponent, callback);
        });
    } else {
        fiberRoot = root._internalRoot;
        if (typeof callback === 'function') {
            const originalCallback = callback;
            callback = function () {
                const instance = getPublicRootInstance(fiberRoot);
                originalCallback.call(instance);
            };
        }
        // Update
        updateContainer(children, fiberRoot, parentComponent, callback);
    }
    return getPublicRootInstance(fiberRoot);
}


const ReactDOM: Object = {

    render(
        element: React$Element<any>,
        container: DOMContainer,
        callback: ?Function,
    ) {
        invariant(
            isValidContainer(container),
            'Target container is not a DOM element.',
        );
        if (__DEV__) {
            const isModernRoot =
                isContainerMarkedAsRoot(container) &&
                container._reactRootContainer === undefined;
            if (isModernRoot) {
                warningWithoutStack(
                    false,
                    'You are calling ReactDOM.render() on a container that was previously ' +
                    'passed to ReactDOM.createRoot(). This is not supported. ' +
                    'Did you mean to call root.render(element)?',
                );
            }
        }
        return legacyRenderSubtreeIntoContainer(
            null,
            element,
            container,
            false,
            callback,
        );
    },


};
