<template>
    <div class="w-full max-w-full xl:max-w-5xl bg-white rounded-2xl p-6 shadow-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- Search Input -->
            <div class="lg:col-span-2">
                <label
                    for="search"
                    class="block text-sm font-medium text-text mb-2"
                >
                    Поиск
                </label>
                <div class="relative">
                    <input
                        id="search"
                        v-model="localSearch"
                        type="text"
                        placeholder="По названию или описанию..."
                        class="w-full pl-12 pr-12 py-2 rounded-md border border-grey-100 text-text placeholder-textLight/70 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                        @input="debouncedSearch"
                    >
                    <Icon
                        name="lucide:search"
                        class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-textLight"
                    />
                    <button
                        v-if="localSearch"
                        class="absolute right-4 top-1/2 -translate-y-1/2 text-textLight hover:text-text transition-colors"
                        @click="clearSearch"
                    >
                        <Icon
                            name="lucide:x"
                            class="w-5 h-5"
                        />
                    </button>
                </div>
            </div>

            <!-- Tag Multiselect -->
            <div>
                <label
                    for="tags"
                    class="block text-sm font-medium text-text mb-2"
                >
                    Теги
                </label>
                <VueMultiselect
                    id="tags"
                    v-model="selectedTags"
                    :options="allTags"
                    :multiple="true"
                    :close-on-select="false"
                    :clear-on-select="false"
                    :preserve-search="false"
                    placeholder="Выберите теги"
                    :internal-search="true"
                    :show-labels="false"
                    :allow-empty="true"
                    @update:model-value="handleSelectTag"
                />
            </div>

            <!-- Date Filter -->
            <div>
                <label
                    for="date"
                    class="block text-sm font-medium text-text mb-2"
                >
                    Период
                </label>

                <VueMultiselect
                    id="date"
                    v-model="selectedDateOption"
                    :options="dateOptions"
                    :clear-on-select="false"
                    :preserve-search="false"
                    label="label"
                    track-by="value"
                    placeholder="Выберите период"
                    :internal-search="true"
                    :show-labels="false"
                    :allow-empty="true"
                    @update:model-value="handleSelectDateOption"
                />
            </div>
        </div>

        <!-- Active Filters -->
        <div
            v-if="hasActiveFilters"
            class="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-blush/50"
        >
            <span class="text-sm text-textLight">Фильтры:</span>
            <BaseTag
                v-if="localSearch"
                variant="blush"
                class="flex items-center gap-1"
            >
                Поиск: "{{ localSearch }}"
                <button
                    class="ml-1 hover:text-text transition-colors"
                    @click="clearSearch"
                >
                    <Icon
                        name="lucide:x"
                        class="w-3 h-3"
                    />
                </button>
            </BaseTag>
            <BaseTag
                v-for="selectedTag in selectedTags"
                :key="selectedTag"
                variant="blush"
                class="flex items-center gap-1"
            >
                {{ selectedTag }}
                <button
                    class="ml-1 hover:text-text transition-colors"
                    @click="removeTag(selectedTag)"
                >
                    <Icon
                        name="lucide:x"
                        class="w-3 h-3"
                    />
                </button>
            </BaseTag>
            <BaseTag
                v-if="localDate"
                variant="blush"
                class="flex items-center gap-1"
            >
                {{ dateLabel }}
                <button
                    class="ml-1 hover:text-text transition-colors"
                    @click="removeDate"
                >
                    <Icon
                        name="lucide:x"
                        class="w-3 h-3"
                    />
                </button>
            </BaseTag>
            <button
                class="text-sm text-accent hover:text-text transition-colors ml-auto"
                @click="clearAll"
            >
                Сбросить все
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import VueMultiselect from 'vue-multiselect'

const labels: Record<string, string> = {
    week: 'За неделю',
    month: 'За месяц',
    year: 'За год',
}

const dateOptions = [
    {
        value: 'week',
        label: labels.week,
    },
    {
        value: 'month',
        label: labels.month,
    },
    {
        value: 'year',
        label: labels.year,
    },
]

const props = defineProps<{
    search: string
    tags: string[]
    date: string
    allTags: string[]
}>()

const emit = defineEmits<{
    'update:search': [value: string]
    'update:tags': [value: string[]]
    'update:date': [value: string]
}>()

const localSearch = ref(props.search)
const selectedTags = ref<string[]>(props.tags)
const selectedDateOption = ref(
    dateOptions.find(opt => opt.value === props.date) || null,
)

const localDate = ref(props.date)

const debouncedSearch = useDebounceFn(() => {
    emit('update:search', localSearch.value)
}, 500)

const clearSearch = () => {
    localSearch.value = ''
    emit('update:search', '')
}

const removeTag = (tagToRemove: string) => {
    selectedTags.value = selectedTags.value.filter(tag => tag !== tagToRemove)
    emit('update:tags', selectedTags.value)
}

const removeDate = () => {
    localDate.value = ''
    selectedDateOption.value = null
    emit('update:date', '')
}

const hasActiveFilters = computed(() => {
    return localSearch.value || selectedTags.value.length > 0 || localDate.value
})

const dateLabel = computed(() => {
    return labels[localDate.value] || ''
})

const clearAll = () => {
    localSearch.value = ''
    selectedTags.value = []
    localDate.value = ''
    emit('update:search', '')
    emit('update:tags', [])
    emit('update:date', '')
}

const handleSelectTag = () => {
    emit('update:tags', selectedTags.value)
}

const handleSelectDateOption = (option: { value: string
    label: string }) => {
    localDate.value = option.value
    emit('update:date', option.value)
}

watch(
    () => props.search,
    (newVal) => {
        localSearch.value = newVal
    },
)

watch(
    () => props.tags,
    (newVal) => {
        selectedTags.value = [...newVal]
    },
)

watch(
    () => props.date,
    (newVal) => {
        localDate.value = newVal
        selectedDateOption.value = dateOptions.find(opt => opt.value === newVal) || null
    },
)

watch(
    selectedDateOption,
    (newVal) => {
        emit('update:date', newVal?.value || '')
    },
)
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
