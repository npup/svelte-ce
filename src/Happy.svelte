<script lang="ts">
    import { onMount } from "svelte";

    export let setConfig = (conf: Partial<IConfig> = {}) => {
        config = { ...defaultConfig, ...conf };
    };

    interface IConfig {
        lang: "sv" | "en";
        name: string;
    }
    const defaultConfig: IConfig = {
        lang: "sv",
        name: "Anonymous",
    };
    let config = { ...defaultConfig };

    let result = null;

    function ok() {
        result = true;
    }
    function no() {
        result = false;
    }

    onMount(() => {
        setConfig();
    });

</script>

<svelte:options tag="shb-happy" />

<div class="wrap">
    <h1>Hej, { config.name }</h1>
    <p>
        Ditt språk är satt till "{ config.lang }".
    </p>

    <div class="button-row">
        <button on:click={ ok }>Ok</button>
        <button on:click={ no }>No</button>
    </div>
    <div class:ok={ result } class:no={ !result }>
    {#if true === result}
        Kul att du är nöjd!
    {:else if false === result}
        Aj då..
    {/if}
    </div>
</div>


<style>

.wrap {
    font-family: Verdana, Arial, sans-serif;
    font-size: 1.1em;
    max-width: 400px;
    margin: 0 auto;
}

.ok {
    color: forestgreen;
}
.no {
    color: crimson;
}
h1 {
    font-size: 1.5em;
}
p {
    color: tomato;
    font-size: 1.2em;
}
.button-row {
    display: flex;
    justify-content: space-evenly;
}
.button-row button {
    flex: 1;
}
</style>
